interface Product {
    id: number,
    title: string,
    tags: string[],
    category: string,
    description: string,
    price: number,
    brand: string,
    rating: string,
    thumbnail: string,
}
interface Category {
    slug: string,
    name: string,
    url: string,
}
interface CartItem extends Product {
    quantity: number;
}
export type { Product, Category, CartItem }