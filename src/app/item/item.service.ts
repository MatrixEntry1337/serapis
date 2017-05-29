import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/observable';
import {ItemGroup} from './interface/item.group';
import {Item} from './interface/item';
import {handleError} from '../util/error-handler';


@Injectable()
export class ItemService {

  private itemsUrl = 'http://localhost:3001/anubis/item_service/v1/api/item/';

  constructor(private http: Http) {}

  getAllItems(): Observable<ItemGroup> {
    return this.http
      .get(this.itemsUrl)
      .map(response => {
        console.log('Retrieved All Items: ');
        console.log(response.json());
        return response.json().data as ItemGroup;
      })
      .catch(handleError);
  }

  getItem(item: Item): Observable<Item> {
    return this.http
      .get(this.itemsUrl + item.id)
      .map(response => {
        console.log('Retrieved All Item Data: ');
        console.log(response);
        return response.json();
      })
      .catch(handleError);
  }

  getItemById(item: number): Observable<Item> {
    return this.http.get(this.itemsUrl + item)
      .map(response => {
        console.log('Retrieved All Item Data: ');
        console.log(response);
        return response.json();
      })
      .catch(handleError);
  }
}
