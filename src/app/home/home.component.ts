import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stockMetrics: any; // Define the type according to the API response

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch stockMetrics data from the API
    this.http.get('http://localhost:3000/api/stockMetrics').subscribe((data: any) => {
      this.stockMetrics = data;
    });
  }
}
