import { Component, OnInit, Input } from '@angular/core';
import { IProduct} from '../product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem : IProduct;
  constructor() { }

  ngOnInit() {
  }

}
