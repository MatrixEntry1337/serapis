import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {Champion} from '../interface/champion';
import {ChampionInfo} from '../interface/champion-info';
import {ChampionService} from '../champion.service';

@Component({
  moduleId: module.id,
  selector: 'serapis-champion-list',
  templateUrl: 'champion-list.component.html'
})
export class ChampionListComponent implements OnInit, OnChanges {
  @Input()
  championInfoList: ChampionInfo[];

  @Input()
  listName: string;

  // TODO - set up oupt event after selecting a champion
  @Output()
  notify: EventEmitter<Champion> = new EventEmitter<Champion>();

  champions: Champion[];

  private splashUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';

  constructor(private championService: ChampionService) { }

  getChampions(): void {
    this.champions = [];
    for (let i = 0; i < this.championInfoList.length; i ++) {
      this.championService
        .getChampionById(this.championInfoList[i].id)
        .subscribe(champion => {
          this.champions.push(champion);
        });
    }
  }

  getChampionImage(champion: Champion): string {
    return this.splashUrl + champion.key + '_0.jpg';
  }

  // TODO - select champion function
  selectChampion(): void {

  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.getChampions();
  }
}
