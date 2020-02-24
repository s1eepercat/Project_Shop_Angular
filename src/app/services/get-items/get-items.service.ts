import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { item } from '../../models/item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
  constructor(private http: HttpClient) { }

  getItems():Observable<item[]> {
    return this.http.get<item[]>(`${environment.api}items`);
  }

}
