import {Component, OnInit} from '@angular/core';
import {ItemGroup} from './interface/item.group';
import {Item} from './interface/item';
import {ItemService} from './item.service';

@Component({
  moduleId: module.id,
  selector: 'serapis-item-container',
  templateUrl: 'item.container.component.html',
  styleUrls: ['item.container.component.css']
})
export class ItemContainerComponent implements OnInit {
  items: ItemGroup;
  selectedItem: Item;
  itemsInto = 'Build Into';
  itemsFrom = 'Built From';

  constructor(private itemService: ItemService) {}

  getAllItems(): void {
    this.itemService.getAllItems()
      .subscribe(items => {
        this.items = items;
      });
  }

  selectItem(item: Item): void {
    this.itemService.getItem(item)
      .subscribe(_item => {
        console.log('Item Data: ');
        console.log(_item);
        this.selectedItem = _item;
      });
  }

  ngOnInit(): void {
    this.getAllItems();
  }
}
