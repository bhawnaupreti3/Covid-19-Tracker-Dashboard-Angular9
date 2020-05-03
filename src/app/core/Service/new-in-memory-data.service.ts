import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { INewsDetail } from '../Model/News';

@Injectable({
  providedIn: 'root'
})
export class NewInMemoryDataService implements  InMemoryDbService{

  createDb() {

    /** Default User data collection. */
    const newsDetail: INewsDetail[] = [{
      "id": 1,        
      "title" :"Covid -19",
      "description" : "Covid is far from over",
      "summary" : "Precaution are mandatory",
       "fullNews": "jhvvvvvvvvvvvvvcccjvjmvmj m"
    }, {
      "id": 2,        
      "title" :"Covid -19 PartII",
      "description" : "Covid is far from over again",
      "summary" : "Precaution are mandatory again",
       "fullNews": "jhvvvvvvvvvvvvvcccjvjmvmj m again"
    }];

    return {newsDetail};
  }

/** Method that generates the ids of user when not passed. */
  genId(userDetail: INewsDetail[]): number {
    return userDetail.length > 0 ? Math.max(...userDetail.map(user => user.id)) + 1 : 1;
  }
}
