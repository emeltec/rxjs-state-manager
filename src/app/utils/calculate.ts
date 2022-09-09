import { IProductCart } from "../interfaces/product";

export const calculateTotal = (list:IProductCart[] = []) => {
  let total = 0.00;
  if(list.length > 0) {
    list.forEach(item => {
      total += (item.price * item.quantity);
    });
    return parseFloat(total.toFixed(2));
  } else {
    return 0.00
  }
}