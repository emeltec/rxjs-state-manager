import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data/products';
import { IProduct, IProductCart } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/store/store.service';
import { calculateTotal } from 'src/app/utils/calculate';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit {

  products: IProductCart[] = [];
  totalGlobal:number = 0.00;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getProducts().subscribe(products => {
      this.products = products;
      this.totalGlobal = calculateTotal(products);
    })
    
  }

  deleteAllProducts() {
    this.store.deleteAllProducts();
  }

  deleteProduct(id: number) {
    this.store.deleteProduct(id);
  }

  addOne(id:number) {
    this.store.addOne(id)
  }

  deleteOne(id:number) {
    this.store.deleteOne(id);
  }

  

}
