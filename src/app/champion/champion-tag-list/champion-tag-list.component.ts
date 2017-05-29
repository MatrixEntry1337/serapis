import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Champion} from '../interface/champion';

@Component({
  moduleId: module.id,
  selector: 'app-champion-tag-list',
  templateUrl: 'champion-tag-list.component.html'
})

export class ChampionTagListComponent {

  @Input() champions: Champion[];
  @Input() championTag: string;
  @Output() notify: EventEmitter<Champion> = new EventEmitter<Champion>();

  private showChampions = false;

  toggleChampions(): void {
    this.showChampions = true;
  }

  selectChampion(champion: Champion): void {
    this.notify.emit(champion);
  }
}
