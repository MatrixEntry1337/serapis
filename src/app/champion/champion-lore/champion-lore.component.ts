import {Component, Input} from '@angular/core';
import {Champion} from '../interface/champion';

@Component({
  moduleId: module.id,
  selector: 'serapis-champion-lore',
  templateUrl: './champion-lore.component.html'
})

export class ChampionLoreComponent {
  @Input() champion: Champion;

  constructor() {}

}
