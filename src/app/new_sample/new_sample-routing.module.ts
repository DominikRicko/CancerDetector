import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewSampleComponent } from './new_sample.component';

const routes: Routes = [
  {
    path: 'new_sample',
    component: NewSampleComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSampleRoutingModule {}
