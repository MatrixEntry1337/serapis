import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// import interfaces
import {ChampionGroup} from './interface/champion.group';
import {Champion} from './interface/champion';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
      .catch(this.handleError);
  }

  getChampion(champion: Champion): Observable<Champion> {
    return this.http.get(this.championsUrl + champion.id)
      .map(response => {
        console.log('Retrieved Champion Data: ');
        console.log(response.json());
        return response.json() as Champion;
      })
      .catch(this.handleError);
  }

  getChampionById(champion: number): Observable<Champion> {
    return this.http.get(this.championsUrl + champion)
      .map(response => {
        console.log('Retrieved Champion Data: ');
        console.log(response.json());
        return response.json() as Champion;
      })
      .catch(this.handleError);
  }

  // error handler
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
