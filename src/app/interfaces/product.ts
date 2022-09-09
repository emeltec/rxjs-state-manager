export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IProductCart extends IProduct {
  quantity: number;
}