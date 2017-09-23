import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsEditComponent } from './product-details-edit/product-details-edit.component';
import { DollarsPipe } from './dollars.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseComponent } from './purchase-dialog/purchase-dialog.component';
import { CapitalizePipe } from './capitalize.pipe';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
 
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [ 
    AppComponent,
    ProductListComponent,
    NavigationToolbarComponent,
    AboutComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductDetailsEditComponent,
    DollarsPipe,
    PurchaseComponent,
    CapitalizePipe,
  ],
  entryComponents: [PurchaseComponent],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    RouterModule.forRoot([
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent},
    { path: 'add_product', component: AddProductComponent},  
    { path: 'about', component: AboutComponent}])
  ],
  providers: [ ProductsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
 }
