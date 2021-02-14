import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { NewSampleRoutingModule } from './new_sample/new_sample-routing.module';
import { StatisticsRoutingModule } from './statistics/statistics-routing.module';
import { HistoryRoutingModule } from './history/history-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new_sample',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NewSampleRoutingModule,
    StatisticsRoutingModule,
    HistoryRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
