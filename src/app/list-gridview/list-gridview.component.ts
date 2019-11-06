import { Component, OnInit } from '@angular/core';
import {ItemList, Item} from '../Interfaces/list';
import {ListService} from '../Services/list-service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NewItemModalComponent} from '../modals/new-item-modal/new-item-modal.component'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-gridview',
  templateUrl: './list-gridview.component.html',
  styleUrls: ['./list-gridview.component.scss']
})
export class ListGridviewComponent implements OnInit {

  _list: ItemList[];
  private subscriptions: Subscription[] = [];
  constructor(private _ls: ListService, private dialog: MatDialog,) { }

  ngOnInit() {
    this.subscriptions.push(
      this._ls._itemlist.subscribe(data => {
        if (data) {
          this._list = data; 
        }
      })
    );
  }

  delete(Item: Item)
  {
    this._ls.removeItem(Item.id, Item.parentid);
  }
  
  additem(Item?: Item)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'fullscreen';
    dialogConfig.height = '180px'; 
    dialogConfig.width = '400px'; 
    dialogConfig.data = (Item? Item.id : null); 
    this.dialog.open(NewItemModalComponent, dialogConfig);  
  }

}
