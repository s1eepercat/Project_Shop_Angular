import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopPageRoutingModule } from './shop-page-routing.module';

import { ShopPageComponent } from './shop-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { OptionComponent } from '../../components/option/option.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputComponent } from '../../components/input/input.component';
import { SingleItemComponent } from './components/single-item/single-item.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    ShopComponent,
    OptionComponent,
    SidebarComponent,
    InputComponent,
    SingleItemComponent
  ],
  imports: [
    CommonModule,
    ShopPageRoutingModule,
  ]
})
export class ShopPageModule { }
