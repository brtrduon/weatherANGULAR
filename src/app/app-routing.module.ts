import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent,
    children: []
  },
  {
    path: 'burbank',
    pathMatch: 'full',
    component: BurbankComponent,
    children: []
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent,
    children: []
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
