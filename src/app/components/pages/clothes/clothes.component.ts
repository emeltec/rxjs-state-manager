import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data/products';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {

  products: IProduct[] = [];

  constructor() { }

  ngOnInit() {
    this.products = Products.textile;
  }

}
