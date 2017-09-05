import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
//import { Http } from '@angular/http';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ 
    AppComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
    //HttpClientModule
  ],
  providers: [ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
