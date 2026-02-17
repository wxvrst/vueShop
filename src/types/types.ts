interface Product {
  id: number;
  title: string;
  tags?: string[];
  category: string;
  description: string;
  price: number;
  brand?: string;
  rating?: string;
  thumbnail: string;
  images?: string[];
  reviews?: Review[];
}
interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
interface User {
  id: number;
  username: string;
  password: string; //?
  image?: string;
}
interface Params {
  search: string;
  category: string;
  page: number;
  limit: number;
  sortBy: string;
  order: "asc" | "desc";
}
interface FetchParams {
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: "asc" | "desc";
}
interface SortByList {
  name: string;
  sort: string;
  order: "asc" | "desc";
}
interface Category {
  slug: string;
  name: string;
  url: string;
}
interface CartItem extends Product {
  quantity: number;
}
// interface AuthUser extends User {
//   isloggeed: boolean;
// }
export type {
  Product,
  Category,
  CartItem,
  Params,
  FetchParams,
  User,
  SortByList,
  Review,
};
