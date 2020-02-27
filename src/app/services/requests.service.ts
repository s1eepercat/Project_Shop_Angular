import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { item } from '../models/item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error code: ${error.status}, ${error.error}.`;
    }
    return throwError(errorMessage);
  }

  getItems():Observable<item[]> {
    return this.http.get<item[]>(`${environment.api}items`)
      .pipe(catchError(this.handleError))
  }

  getItem(id:number):Observable<item[]> {
    return this.http.get<item[]>(`${environment.api}items?id=${id}`)
      .pipe(catchError(this.handleError))
  }

  postItem(item: any):Observable<item[]> {
    return this.http.post<item[]>(`${environment.api}items`,item)
      .pipe(catchError(this.handleError))
  }

  putItem(id: number,item: item):Observable<item[]> {
    return this.http.put<item[]>(`${environment.api}items?id=${id}`, item)
      .pipe(catchError(this.handleError))
  }

  deleteItem(id: number):Observable<item[]> {
    return this.http.delete<item[]>(`${environment.api}items?id=${id}`)
      .pipe(catchError(this.handleError))
  }
}
