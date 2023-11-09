import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'C:/Users/Elijah Rona/hello-world/src/app/home/home.component'; // Replace 'path-to-your-home-component' with the actual path
import { StockMetricsService } from 'C:/Users/Elijah Rona/hello-world/src/app/stock-metrics.service'; // Replace 'path-to-your-service-file' with the actual path

const routes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
