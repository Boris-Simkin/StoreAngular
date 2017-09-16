import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service'; 
import { IProduct} from '../product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // tiles = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  products : IProduct[];

  @ViewChild('sidenav') sidenav: any;

  constructor(private productsService : ProductsService) {
   }

  ngOnInit() {
    
    this.productsService.fetchProducts().subscribe(
        res => {
          this.products = res['products'];
          console.log(this.products[2]);},
      )
  }

  productDetails() {
    this.sidenav.open();
  }
  
//   toggle() {
//     this.sidenav.open();
// }


}
