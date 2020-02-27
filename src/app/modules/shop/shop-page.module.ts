import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './../../app-routing.module';

import { ShopPageComponent } from './shop-page.component';
import { OptionComponent } from '../../components/option/option.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputComponent } from '../../components/input/input.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { BrowseComponent } from '../shop/components/browse/browse.component';
import { CartComponent } from '../shop/components/cart/cart.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    OptionComponent,
    SidebarComponent,
    InputComponent,
    SingleItemComponent,
    BrowseComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class ShopPageModule { }
