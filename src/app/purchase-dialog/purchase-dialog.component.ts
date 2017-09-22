import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  templateUrl: './purchase-dialog.component.html',
  styleUrls: ['./purchase-dialog.component.css']
})
export class PurchaseComponent  {

  constructor(
     public dialogRef: MdDialogRef<PurchaseComponent>, 
    @Inject(MD_DIALOG_DATA) public data: any) { }

  close() {
     this.dialogRef.close();
  }

}
