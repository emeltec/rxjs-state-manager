import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data/products';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-tecnology',
  templateUrl: './tecnology.component.html',
  styleUrls: ['./tecnology.component.scss']
})
export class TecnologyComponent implements OnInit {

  products: IProduct[] = [];

  constructor() { }

  ngOnInit() {
    this.products = Products.tecnology;
  }

}
