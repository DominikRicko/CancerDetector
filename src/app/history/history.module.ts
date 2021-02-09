import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule} from './history-routing.module';

import { HistoryComponent} from './history.component';
import { SharedModule } from '../shared/shared.module';

import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    GridModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    ChartsModule
  ]
})
export class HistoryModule { }
