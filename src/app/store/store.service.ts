import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

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
      image: 'assets/products/images/iphone-13.jpg'
    }
  ]

  private cart$ = new BehaviorSubject<IProduct[]>(this.initialState);

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return this.cart$.asObservable();
  }

}
