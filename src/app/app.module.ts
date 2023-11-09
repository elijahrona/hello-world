import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';
import { SalesChartComponent } from './sales-chart/sales-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesChartComponent
  ],
  imports: [
    BrowserModule, NgChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
