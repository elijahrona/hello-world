import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'; // Import ChartType from ng2-charts

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    responsive: true
  };

  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: ChartType = 'bar'; // Specify the chart type as 'bar'
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales',
    backgroundColor: ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'cyan'] }
  ];
  

  constructor() { }

  ngOnInit() {
  }
}
