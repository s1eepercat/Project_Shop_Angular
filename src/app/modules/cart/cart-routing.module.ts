import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartContainerComponent } from './layout/cart-container.component';

const routes: Routes = [
  { path: 'cart', component: CartContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
