import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data/products';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit {

  products: any[] = [];

  constructor() { }

  ngOnInit() {
    this.products = Products.tecnology;
  }

}
