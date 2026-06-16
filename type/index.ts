export interface IProduct {
    id: number,
    product_name: string,
    category: string,
    brand: string,
    price: string,
    image: string
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}