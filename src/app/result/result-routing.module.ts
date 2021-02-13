import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';

const routes: Routes = [
  {
    path: 'result',
    component: ResultComponent,
    data:{}
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule {}
