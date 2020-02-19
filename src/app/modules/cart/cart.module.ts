import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';

import { CartContainerComponent } from './layout/cart-container.component';


@NgModule({
  declarations: [
    CartContainerComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ], 
  exports: [
    CartContainerComponent
  ]
})
export class CartModule { }
