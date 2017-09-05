import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'; 

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
    this.productsService.fetchProducts().subscribe((data) => console.log(data));

  }

}
