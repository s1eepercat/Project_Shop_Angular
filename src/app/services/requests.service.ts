import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from '../models/item.model';
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

  getItems() {
    return this.http.get<Item[]>(`${environment.api}items`)
      .pipe(catchError(this.handleError))
  }

  findItem(id: number) {
    return this.http.get<Item>(`${environment.api}items?id=${id}`)
      .pipe(catchError(this.handleError))
  }

  createItem(item: Item) {
    return this.http.post<Item>(`${environment.api}items`, item)
      .pipe(catchError(this.handleError))
  }

  updateItem(id: number, item: Item) {
    return this.http.put<Item>(`${environment.api}items?id=${id}`, item)
      .pipe(catchError(this.handleError))
  }

  deleteItem(id: number) {
    return this.http.delete<Item>(`${environment.api}items?id=${id}`)
      .pipe(catchError(this.handleError))
  }
}
