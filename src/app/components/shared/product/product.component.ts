import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct = {} as IProduct;

  constructor() {

  }

  ngOnInit() {
  }

}
