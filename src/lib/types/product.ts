import {
  ProductCategory,
  ProductFlavor,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: string;
  productStatus: ProductStatus;
  productCategory: ProductCategory;
  productFlavor: ProductFlavor;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquery {
  order: string;
  page: number;
  limit: number;
  productCategory?: ProductCategory;
  productFlavor?: ProductFlavor;
  search?: string;
}
