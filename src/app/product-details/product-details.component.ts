import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  @Output()
  addToCart: EventEmitter<any> = new EventEmitter();

  @Input('product') product : any;

  ngOnInit() {
  }

  closeNav() {
    this.close.emit();
  }

  onAddToCart() {
    this.addToCart.emit();
  }

}
