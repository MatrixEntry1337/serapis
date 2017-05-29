import {Component, Input} from '@angular/core';
import {Spell} from '../interface/spell';

@Component({
  moduleId: module.id,
  selector: 'serapis-champion-spells',
  templateUrl: './champion-spells.component.html'
})

export class ChampionSpellsComponent {
  @Input() spells: Spell[];

  private imageUrl = 'http://ddragon.leagueoflegends.com/cdn/7.3.3/img/spell/';

  getSpellImage(spellName: string): string {
    return this.imageUrl + spellName + '.png';
  }
}
