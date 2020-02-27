import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 

import { AppRoutingModule } from './../../app-routing.module';

import { AdminPageComponent } from './admin-page.component';
import { FormComponent } from './components/form/form.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    FormComponent,
    SelectOptionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class AdminPageModule { }
