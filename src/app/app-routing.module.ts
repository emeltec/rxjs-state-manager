import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './components/pages/clothes/clothes.component';
import { ProductsCartComponent } from './components/pages/products-cart/products-cart.component';
import { TecnologyComponent } from './components/pages/tecnology/tecnology.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tecnology'
  },
  {
    path: 'tecnology',
    component: TecnologyComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'cart',
    component: ProductsCartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
