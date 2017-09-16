//import { MaterialSharedModule } from './material-shared/material-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
//import { Http } from '@angular/http';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsEditComponent } from './product-details-edit/product-details-edit.component';

@NgModule({
  declarations: [ 
    AppComponent,
    ProductComponent,
    ProductListComponent,
    SideNavComponent,
    NavigationToolbarComponent,
    AboutComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([{ path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent},
    { path: 'add_product', component: AddProductComponent},  
    { path: 'about', component: AboutComponent}])
  ],
  providers: [ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
