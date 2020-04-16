import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  getTotals() {
    return this.http.get(BASE_URL + '/statistics/totals');
  }
}
