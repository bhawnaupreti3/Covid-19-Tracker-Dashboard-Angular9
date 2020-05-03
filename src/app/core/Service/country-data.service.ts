import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  private _countrydataurl:string = 'https://api.covid19india.org/data.json';
  private _statedataurl: string = "https://api.covid19india.org/v2/state_district_wise.json";
  constructor(private http: HttpClient) { }

  getCountryData(): Observable<any>{    
    return this.http.get<any>(this._countrydataurl);
  }

  getStateData() : Observable<any>{    
    return this.http.get<any>(this._statedataurl);
  }
}
