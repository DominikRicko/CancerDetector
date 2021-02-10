import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSampleRoutingModule } from './new_sample-routing.module';

import { NewSampleComponent } from './new_sample.component';
import { SharedModule } from '../shared/shared.module';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { FloatingLabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ResultModule } from '../result/result.module';

@NgModule({
  declarations: [NewSampleComponent],
  imports: [
    SharedModule,
    NewSampleRoutingModule,
    ResultModule,
    CommonModule,
    InputsModule,
    FloatingLabelModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownsModule,
    LayoutModule
  ]
})
export class NewSampleModule {}
