import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {Item} from '../interface/item';
import {ItemService} from '../item.service';

@Component({
  moduleId: module.id,
  selector: 'serapis-item-lists',
  templateUrl: 'item-lists.component.html'
})

export class ItemListsComponent implements OnInit, OnChanges {
  @Input()
  itemList: string[];

  items: Item[];

  @Input()
  listName: string;

  @Output()
  notify: EventEmitter<Item> = new EventEmitter<Item>();
  selectItem(item: Item) {
    this.notify.emit(item);
  }

  constructor(private itemService: ItemService) {}

  getItems(): void {
    this.items = [];
    if (this.itemList) {
      for (let i = 0; i < this.itemList.length; i++) {
        this.itemService
          .getItemById(Number(this.itemList[i]))
          .subscribe(item => {
            this.items.push(item);
            console.log('Current Items:');
            console.log(this.items);
          });
      }
    }
  }

  ngOnChanges() {
    this.getItems();
  }

  ngOnInit() {
    this.getItems();
  }
}
