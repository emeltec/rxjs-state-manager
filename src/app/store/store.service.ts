import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct, IProductCart } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  initialState = [
    {
      id: 10,
      name: 'Iphone 11 pro',
      description: '256GB, Navy Blue',
      price: 800,
      image: 'assets/products/images/iphone-13.jpg',
      quantity: 2,
      total: 1600
    }
  ]

  private cart$ = new BehaviorSubject<IProductCart[]>([]);

  constructor() { 
    let prodsStorage = localStorage.getItem('prods');
    if(prodsStorage) {
      this.cart$.next(JSON.parse(prodsStorage));
    }
  }

  getProducts(): Observable<IProductCart[]> {
    return this.cart$.asObservable();
  }

  setProducts(prods: IProductCart[]) {
    this.cart$.next([...prods]);
    localStorage.setItem('prods', JSON.stringify(prods));
  }

  addProduct(product: IProductCart) {
    let prodsCart = this.cart$.getValue();
    let prod = prodsCart.find(prod => prod.id === product.id);
    if(prod) {
      prod.quantity += 1;
      this.setProducts([...prodsCart])
    } else {
      this.setProducts([...prodsCart, product]);
    }
  }

  deleteProduct(id:number) {
    let prods = this.cart$.getValue().filter(prod => prod.id !== id);
    this.setProducts([...prods]);
  }

  addOne(id: number) {
    let prods = this.cart$.getValue();
    let prod = prods.find(prod => prod.id === id);
    if(prod) {
      prod.quantity += 1;
      this.setProducts([...prods])
    }
  }

  deleteOne(id:number) {
    let prods = this.cart$.getValue();
    let prod = prods.find(prod => prod.id === id);
    prod!.quantity -= 1;
    
    if(prod!.quantity === 0) { 
      prod!.quantity = 1 
    }
    this.setProducts([...prods])
  }

  deleteAllProducts() {
    this.setProducts([]);
  }

}
