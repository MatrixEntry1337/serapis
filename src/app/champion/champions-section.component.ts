import {Component, OnInit} from '@angular/core';
import {ChampionGroup} from './interface/champion.group';
import {Champion} from './interface/champion';
import {ChampionService} from './champion.service';


@Component({
  moduleId: module.id,
  selector: 'app-champion-container',
  templateUrl: './champions-section.component.html'
})

export class ChampionsContainerComponent implements OnInit {
  private champions: Champion[];
  private selectedChampion: Champion;
  private championTagList: string[] = ['Fighter', 'Assassin', 'Mage', 'Tank', 'Support', 'Marksman'];
  private currentChampionTag = 0;

  constructor(private championService: ChampionService) { }

  //
  getChampions(): void {
    this.championService.getAllChampions()
      .subscribe(champions => {
        // console.log('Objects in ChampionsComponent: ');
        // console.log(champions);
        this.prep(champions);
      });
  }

  //
  private prep(champions: ChampionGroup): void {
    // push champions into array
    const keys = Object.keys(champions);
    this.champions = [];
    for (const key of keys){
      this.champions.push(champions[key]);
    }

    // sort champions - name
    this.champions.sort(function(a, b){
      return (a.name > b.name) ? 1 : -1;
    });

    // select random champion
    const randChamp = Math.trunc(Math.random() % 100 * 100);
    this.getChampion(this.champions[randChamp]);
  }

  //
  getChampion(champion: Champion): void {
    this.championService.getChampion(champion)
      .subscribe(_champion => {
        console.log('Obtained Champion data');
        console.log(_champion);
        return this.selectedChampion = _champion;
      });
  }

  //
  selectTag(tagNumber: number): void {
    this.currentChampionTag = tagNumber;
  }

  ngOnInit(): void {
    this.getChampions();
  }
}
