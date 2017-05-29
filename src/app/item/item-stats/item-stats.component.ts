import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Item} from '../interface/item';
import {Stats} from '../interface/stat';

@Component({
  moduleId: module.id,
  selector: 'serapis-item-stats',
  templateUrl: './item-stats.component.html'
})

export class ItemStatsComponent implements OnInit, OnChanges {

  @Input() item: Item;
  stats: Stats;
  keys: string[];
  imageUrl = 'http://ddragon.leagueoflegends.com/cdn/7.3.3/img/item/';

  constructor() {}

  // get stat keys
  getKeys(): void {
    this.stats = this.item.stats;
    this.keys = Object.keys(this.stats);
    console.log('Keys of Stats:');
    console.log(this.keys);
  }

  // get image
  getFullImage(): string {
    return this.imageUrl + this.item.image.full;
  }

  ngOnChanges(): void {
    this.getKeys();
    this.getFullImage();
  }

  ngOnInit(): void {
    this.getKeys();
    this.getFullImage();
  }
}
