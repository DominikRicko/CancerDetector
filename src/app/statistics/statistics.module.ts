import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';

import { StatisticsComponent } from './statistics.component';
import { SharedModule } from '../shared/shared.module';

import { ChartsModule } from '@progress/kendo-angular-charts';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    SharedModule,
    StatisticsRoutingModule,
    ChartsModule
  ]
})
export class StatisticsModule {}
