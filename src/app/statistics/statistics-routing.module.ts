import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics.component';

const routes: Routes = [
  {
    path: 'statistics',
    component: StatisticsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule {}
