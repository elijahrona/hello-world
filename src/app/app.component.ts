import { Component, OnInit } from '@angular/core';
import { StockMetricsService } from './stock-metrics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  stockMetrics: any;

  constructor(private stockMetricsService: StockMetricsService) {}

  ngOnInit() {
    this.stockMetricsService.getStockMetrics().subscribe(
      (data: any) => {
        this.stockMetrics = data;
        // Process and use the data as needed
        console.log(this.stockMetrics);
      },
      (error) => {
        console.error('Error fetching stock metrics:', error);
      }
    );
  }
}
