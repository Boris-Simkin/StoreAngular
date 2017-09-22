import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { IProduct} from '../product';
import { MdSnackBar } from '@angular/material';
import { CustomValidation } from '../custom-validation';

@Component({
  selector: 'product-details-edit',
  templateUrl: './product-details-edit.component.html',
  styleUrls: ['./product-details-edit.component.css']
})
export class ProductDetailsEditComponent implements OnInit {

  rForm : FormGroup;

  constructor(private fb: FormBuilder, public snackBar: MdSnackBar) { 
    this.rForm = fb.group({
      name: [null, Validators.required],
      price: [null, Validators.compose([Validators.required, CustomValidation.negative])],
      image: '',
      description: '',
    });
  }

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  closeNav() {
    this.close.emit();
  }
  
  @Input('product') product : IProduct;
  @Input('products') products : IProduct[];

  ngOnInit() {
  }

  onSubmit() {
    let productToUpdate = this.products.find(p => p.id === this.product.id);
    productToUpdate.name = this.rForm.value.name;
    productToUpdate.description = this.rForm.value.description;
    productToUpdate.price = this.rForm.value.price;
    productToUpdate.image = this.rForm.value.image;
    this.snackBar.open('Changes saved', null, {
      duration: 2000
    });
    //Raise close event
    this.close.emit();
  }
}
