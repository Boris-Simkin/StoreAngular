import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name : string;
  price : string;
  description : string;

  constructor() { }

  ngOnInit() {
    this.name = 'product';
    this.price = '1342';
    this.description = 'practical yet expensive product.';
  }

}
