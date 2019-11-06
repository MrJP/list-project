import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { ItemList, Item } from '../interfaces/list';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    private _list: ItemList[];

    constructor() {
        this._list = [];
    }

    private _listSource = new BehaviorSubject<ItemList[]>(this._list);
    _itemlist = this._listSource.asObservable();

    addItem(name: string, parentid?: number) {
        let Item: ItemList;
        Item = { ...Item };
        Item.children = [];
        Item.name = name;
        if (parentid) {
            let parentIndex = this._list.findIndex(c => c.id == parentid);

            Item.id = this.getmaxid(this._list[parentIndex].children);
            Item.parentid = parentid;
            this._list[parentIndex].children.push(Item);
        }
        else {

            Item.id = this.getmaxid(this._list);
            Item.parentid = null;
            this._list.push(Item);
        }
        this._listSource.next(this._list);
    }

    getmaxid(Items: Item[]) {
        if (Items.length > 0) {
            return Items.reduce(function (a, b) {
                return Math.max(a, b.id)
            }, Number.NEGATIVE_INFINITY) + 1;
        }
        else
            return 1;
    }

    removeItem(id: number, parentid?: number) {
        if (parentid) {
            this._list[this._list.findIndex(c => c.id == parentid)].children.splice(this._list.findIndex(c => c.id == id), 1);
        }
        else {
            this._list.splice(this._list.findIndex(c => c.id == id), 1);
        }
        this._listSource.next(this._list);
    }

}
