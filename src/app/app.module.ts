import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminPageModule } from './modules/admin/admin-page.module';
import { ShopPageModule } from './modules/shop/shop-page.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminPageModule,
    ShopPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
