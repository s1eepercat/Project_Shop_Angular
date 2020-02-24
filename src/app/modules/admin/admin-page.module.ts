import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';

import { AdminPageComponent } from './admin-page.component';

@NgModule({
  declarations: [
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminPageModule { }
