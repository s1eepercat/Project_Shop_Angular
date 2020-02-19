import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';

import { ShopContainerComponent } from './layout/shop-container.component';


@NgModule({
  declarations: [
    ShopContainerComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports: [
    ShopContainerComponent
  ]
})
export class ShopModule { }
