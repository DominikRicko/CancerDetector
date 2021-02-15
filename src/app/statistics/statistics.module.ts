import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';

import { StatisticsComponent } from './statistics.component';
import { SharedModule } from '../shared/shared.module';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [StatisticsComponent, LineChartComponent, PieChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    StatisticsRoutingModule,
    ChartsModule,
    LabelModule,
    LayoutModule
  ]
})
export class StatisticsModule {}
