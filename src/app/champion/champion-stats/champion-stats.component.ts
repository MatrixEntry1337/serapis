import {Component, OnInit, Input} from '@angular/core';
import {Stats} from '../interface/stat';

@Component({
  moduleId: module.id,
  selector: 'serapis-champion-stats',
  templateUrl: './champion-stats.component.html'
})
export class ChampionStatsComponent implements OnInit {
  @Input()
  stats: Stats;
  keys: string[];

  constructor() {}

  getKeys(): void {
    this.keys = Object.keys(this.stats);
    console.log('Keys of Stats:');
    console.log(this.keys);
  }

  ngOnInit(): void {
    this.getKeys();
  }

}
