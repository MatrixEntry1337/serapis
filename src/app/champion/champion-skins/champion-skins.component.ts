import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Champion} from '../interface/champion';
import {Skin} from '../interface/skin';

@Component({
  moduleId: module.id,
  selector: 'app-champion-skins',
  templateUrl: './champion-skins.component.html'
})

export class ChampionSkinsComponent implements OnInit, OnChanges {

  @Input()
  champion: Champion;

  private skins: Skin[];
  private selectedSkin: number;
  private splashUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';

  constructor() {}

  getChampionSkinImage(): string {
    return this.splashUrl + this.champion.key + '_' + this.selectedSkin + '.jpg';
  }

  selectSkin(skin: Skin): void {
    this.selectedSkin = skin.num;
  }

  ngOnChanges(): void {
    this.selectedSkin = 0;
    this.skins = this.champion.skins;
  }

  ngOnInit(): void {
    this.selectedSkin = 0;
    this.skins = this.champion.skins;
  }

}
