import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';

import { ResultComponent } from './result.component';
import { SharedModule } from '../shared/shared.module';

import { GaugesModule } from '@progress/kendo-angular-gauges';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, SharedModule, ResultRoutingModule, GaugesModule],
  exports: [ResultComponent],
})
export class ResultModule {}
