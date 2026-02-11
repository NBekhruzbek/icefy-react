import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
}

/** HOMEPAGE */
export interface HomePageState {
  classicFavorites: Product[];
  bestSellers: Product[];
  topMembers: Member[];
}

/** PRODUCT PAGE */

/** ORDERS PAGE */
