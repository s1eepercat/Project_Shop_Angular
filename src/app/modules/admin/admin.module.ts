import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminContainerComponent } from './layout/admin-container.component';


@NgModule({
  declarations: [
    AdminContainerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminContainerComponent
  ]
})
export class AdminModule { }
