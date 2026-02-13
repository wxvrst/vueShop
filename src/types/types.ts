interface Product {
  id: number;
  title: string;
  tags: string[];
  category: string;
  description: string;
  price: number;
  brand: string;
  rating: string;
  thumbnail: string;
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
}
interface FetchParams {
  limit?: number;
  skip?: number;
}
interface Category {
  slug: string;
  name: string;
  url: string;
}
interface CartItem extends Product {
  quantity: number;
}
interface AuthUser extends User {
  isloggeed: boolean;
}
export type { Product, Category, CartItem, Params, FetchParams, User };
