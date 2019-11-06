import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../Interfaces/list';
import { ListService } from '../../Services/list-service'

@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss']
})
export class NewItemModalComponent implements OnInit {
  FormGroupItem: FormGroup;
  ItemName: string = "";
  ParentID: number = null;

  constructor(private dialogRef: MatDialogRef<NewItemModalComponent>, @Inject(MAT_DIALOG_DATA) public data: number, private _ls: ListService, private _formBuilder: FormBuilder) {
    if (data) {
      this.ParentID = data;
    }
  }

  ngOnInit() {
    this.FormGroupItem = this._formBuilder.group({
      txtName: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
    });
  }

  add() {
    if (this.FormGroupItem.valid) {
      this._ls.addItem(this.ItemName, this.ParentID);
      this.close();
    }
  }

  close() {
    this.dialogRef.close(null);
  }

}
