import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,of, throwError } from 'rxjs';
import { INewsDetail } from '../Model/News';
import { catchError  } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  addUser(newDetail: INewsDetail) : Observable<INewsDetail> {
    return this.http.post<INewsDetail>(this.apiURL, newDetail, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private apiURL = "api/newsDetail";

  constructor(private http: HttpClient) { }

  /** GET ALL user detail. */
  getNewsrDetails(): Observable<INewsDetail[]> {
    return this.http.get<INewsDetail[]>(this.apiURL);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
