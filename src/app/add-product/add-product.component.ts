import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service'; 
import { MdSnackBar } from '@angular/material';

import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IProduct} from '../product';
import { CustomValidation } from '../custom-validation';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  rForm : FormGroup;
  product : IProduct;

  constructor(private fb: FormBuilder, private productsService : ProductsService, public snackBar: MdSnackBar) { 
    this.rForm = fb.group({
      name: [null, Validators.required],
      price: [null, Validators.compose([Validators.required, CustomValidation.negative])],
      image: '',
      description: '',
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.product = this.rForm.value;
    this.productsService.addProduct(this.product);
    this.rForm.reset();
    this.snackBar.open('Product created', null, {
      duration: 2000
    });
  }

  @ViewChild('preview') preview: any;


}
