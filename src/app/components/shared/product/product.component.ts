import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct, IProductCart } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct = {} as IProduct;

  constructor(private store: StoreService) {

  }

  ngOnInit() {
  }

  addProduct(product: IProduct) {
    let prodCart:IProductCart = {...product, quantity: 1};
    console.log(prodCart)
    this.store.addProduct(prodCart);
  }

}
