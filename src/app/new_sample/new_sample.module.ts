import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSampleRoutingModule } from './new_sample-routing.module';

import { NewSampleComponent } from './new_sample.component';
import { SharedModule } from '../shared/shared.module';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { FloatingLabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [NewSampleComponent],
  imports: [
    SharedModule,
    NewSampleRoutingModule,
    CommonModule,
    InputsModule,
    FloatingLabelModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownsModule
  ]
})
export class NewSampleModule {}
