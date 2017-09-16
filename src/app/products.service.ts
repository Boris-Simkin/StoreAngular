import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { IProduct} from './product';


@Injectable()
export class ProductsService {
  private url : string = "assets/products.json";
  //products : IProduct[];
  constructor(private http: Http) {}

  fetchProducts() : Observable<IProduct[]>{
    // const response: Observable<IProduct[]> = this.http.get(this.url)
    //   .map(
    //     (res: Response) => <IProduct[]> res.json()
    //   );

    //   response.subscribe(
    //     res => {this.products = res['products'];
    //             console.log(this.products[0]);},
    //   )
      
      return this.http.get(this.url)
      .map(
        (res: Response) => <IProduct[]> res.json()
      );

  }



}
