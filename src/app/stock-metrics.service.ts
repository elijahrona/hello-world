import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockMetricsService {

  constructor(private http: HttpClient) { }
  getStockMetrics() {
    return this.http.get('http://localhost:3000/api/stockMetrics'); // Adjust the URL as needed
  }
}
