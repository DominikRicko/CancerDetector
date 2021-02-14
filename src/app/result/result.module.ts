import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result.component';
import { SharedModule } from '../shared/shared.module';

import { GaugesModule } from '@progress/kendo-angular-gauges';

import { LabelModule } from '@progress/kendo-angular-label';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, SharedModule, GaugesModule, LabelModule],
  exports: [ResultComponent],
})
export class ResultModule {}
