import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { counterProducts } from 'src/app/utils/counter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countProducts:number = 0;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getProducts().subscribe(products => {
      this.countProducts = counterProducts(products);
    })
  }

}
