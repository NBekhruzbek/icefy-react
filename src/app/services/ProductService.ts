import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquery } from "../../lib/types/product";

class ProductService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getProducts(input: ProductInquery): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productCategory)
        url += `&productCategory=${input.productCategory}`;

      if (input.productFlavor) url += `&productFlavor=${input.productFlavor}`;

      if (input.search) url += `&search=${input.search}`;

      const result = await axios.get(url, { withCredentials: true }); // axios install: yarn add axios@^0.27.2 & yarn add @types/axios -D va tevada import qilinadi.
      console.log("getProducts:", result);

      return result.data;
    } catch (err) {
      console.log("ERROR, getProduct:", err);
      throw err;
    }
  }

  public async likeToggle(input: string): Promise<any> {
    try {
      let url = `${this.path}/product/like/${input}`;
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("DATA", result.data);
      return result.data;
    } catch (err) {
      console.log("ERROR, likeToggle:", err);
      throw err;
    }
  }

  public async getProduct(productId: string): Promise<Product> {
    try {
      let url = `${this.path}/product/${productId}`;
      const result = await axios.get(url, { withCredentials: true });

      return result.data;
    } catch (err) {
      console.log("ERROR, getProduct:", err);
      throw err;
    }
  }
}

export default ProductService;
