import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { HttpModule } from '@angular/http';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/Rx';
import 'rxjs/add/operator/do';


@Injectable()
export class ProductsService {
  private url : string = "assets/products.json";
  products = [];
  constructor(private http: Http) {}

  fetchProducts() {
    return this.http.get(this.url)
    .map(
      (res) => res.json()
    );
  }


}

export class Product {
  
}
