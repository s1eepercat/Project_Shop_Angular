import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { item } from '../../models/item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindItemService {
  id:number = null;

  constructor(private http: HttpClient) { }

  passId(id:number):void {
    this.id = id;
  }

  findItem():Observable<item[]> {
    return this.http.get<item[]>(`${environment.api}items?id=${this.id}`);
  }
}
