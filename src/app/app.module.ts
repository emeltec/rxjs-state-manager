import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesComponent } from './components/pages/clothes/clothes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ProductsCartComponent } from './components/pages/products-cart/products-cart.component';
import { TecnologyComponent } from './components/pages/tecnology/tecnology.component';
import { ProductComponent } from './components/shared/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TecnologyComponent,
    ClothesComponent,
    HeaderComponent,
    ProductsCartComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
