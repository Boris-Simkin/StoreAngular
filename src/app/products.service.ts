import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IProduct} from './product';

@Injectable()
export class ProductsService {
  private url : string = "assets/products.json";

  subscribeToProducts() {
    this.http.get(this.url)
    .map(
      (res: Response) => <IProduct[]> res.json()
    )
    .subscribe(
      res => {
         this.products = res['products'];
        },(err) => console.error(err));
  }
  
  constructor(private http: Http) {
  }

  private products: IProduct[];
                 
    fetchProducts() : IProduct[]{
      return this.products;
  }

  addProduct(newProduct : IProduct) {
    newProduct.id = this.products.length + 1;
    this.products.push(newProduct);
  }

  removeProduct(toRemove : IProduct) {
    let index = this.products.indexOf(toRemove);
    if(index !== -1) {
      this.products.splice(index, 1);
    }
  }

}
