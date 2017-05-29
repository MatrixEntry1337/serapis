import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import interfaces
import {ChampionGroup} from './interface/champion.group';
import {Champion} from './interface/champion';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {handleError} from '../util/error-handler';

@Injectable()
export class ChampionService {
  private championsUrl = 'http://localhost:3001/anubis/champion_service/v1/api/champion/';

  constructor(private http: Http) { }

  getAllChampions(): Observable<ChampionGroup> {
    return this.http.get(this.championsUrl)
      .map(response => {
        console.log('Getting All ChampionsModule:');
        console.log(response.json().data);
        return response.json().data as ChampionGroup;
      })
      .catch(handleError);
  }

  getChampion(champion: Champion): Observable<Champion> {
    return this.http.get(this.championsUrl + champion.id)
      .map(response => {
        console.log('Retrieved Champion Data: ');
        console.log(response.json());
        return response.json() as Champion;
      })
      .catch(handleError);
  }

  getChampionById(champion: number): Observable<Champion> {
    return this.http.get(this.championsUrl + champion)
      .map(response => {
        console.log('Retrieved Champion Data: ');
        console.log(response.json());
        return response.json() as Champion;
      })
      .catch(handleError);
  }
}
