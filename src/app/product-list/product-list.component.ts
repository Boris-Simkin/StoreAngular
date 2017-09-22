import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service'; 
import { IProduct} from '../product';
import { PurchaseComponent } from '../purchase-dialog/purchase-dialog.component';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : IProduct[];

  @ViewChild('sidenav') sidenav: any;

  currentProduct = {};

  //this boolean activatd then a product added to cart
  fade : boolean = false;

  constructor(private productsService : ProductsService, public dialog: MdDialog) {
  }

  ngOnInit() {
    
    // this.products = this.productsService.fetchProducts();
    setTimeout(this.test(), 3000);
  }

  productDetails(product) {
    this.currentProduct = product;
    this.sidenav.open();
  }
  
  addToCart(product) {
    let dialogRef = this.dialog.open(PurchaseComponent, {
      data: { name: product.name }
    });

    this.currentProduct = product;
    this.fade = true;
    dialogRef.afterClosed().subscribe(result => {

      this.fade = false;
      this.sidenav.close();
      this.productsService.removeProduct(product);
    });
  }


  test() {
    let t = this.productsService.fetchProducts();
    console.log(t);
    this.products = t;
  }

}
