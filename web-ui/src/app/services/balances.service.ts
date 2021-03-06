import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

import { Balance } from '../models/balance';
import { PaginatedResult } from '../models/paginated-result';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BalancesService {

  private baseUrl = environment.api.url + '/balances';

  constructor(private http: HttpClient) { }

  get(offset: number = 0, limit: number = 10, orderBy: string = ''): Observable<PaginatedResult<Balance>> {
    const url = `${this.baseUrl}?offset=${offset}&limit=${limit}&orderBy=${orderBy}`;
    return this.http.get<PaginatedResult<Balance>>(url);
  }
}
