import { IProductCart } from "../interfaces/product";

export const counterProducts = (list:IProductCart[] = []) => {
  let total = 0;
  if(list.length > 0) {
    list.forEach(prod => {
      total += prod.quantity;
    })
    return total;
  } else {
    return 0;
  }
}