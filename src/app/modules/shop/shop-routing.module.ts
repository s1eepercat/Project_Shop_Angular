import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopContainerComponent } from './layout/shop-container.component';

const routes: Routes = [
  { path: '', component: ShopContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
