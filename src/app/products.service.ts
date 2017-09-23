import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import { IProduct} from './product';


@Injectable()
export class ProductsService {
  private url : string = "assets/products.json";

  fetchProducts() {
   return this.http.get(this.url)
    .map(
      (res: Response) => <IProduct[]> res.json()
    );
  }
  
  constructor(private http: Http) {}

  public products: IProduct[];
                 
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
