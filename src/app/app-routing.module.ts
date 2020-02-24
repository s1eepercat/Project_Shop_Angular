import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPageComponent } from './modules/shop/shop-page.component';
import { AdminPageComponent } from './modules/admin/admin-page.component';
import { BrowseComponent } from './modules/shop/components/browse/browse.component';
import { CartComponent } from './modules/shop/components/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo: 'shop/browse', pathMatch: 'full'}, 
  {path:'shop', component: ShopPageComponent, children: [
      {path: 'browse', component: BrowseComponent},
      {path: 'cart', component: CartComponent},
  ]},
  {path:'admin', component: AdminPageComponent},
  {path:'**', redirectTo:'shop/browse', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }