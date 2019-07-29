import { RouterParamsComponent } from './router-params/router-params.component';
import { ApplyComponent } from './apply/apply.component';
import { CalculateComponent } from './calculate/calculate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobxComponent } from './mobx/mobx.component';
import { Mobx1Component } from './mobx1/mobx1.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', component: MobxComponent },
  { path: 'mobx/:id', component: MobxComponent },
  { path: 'mobx1/:id', component: Mobx1Component },
  { path: 'landing/:id', component: LandingComponent },
  { path: 'apply/:id', component: ApplyComponent },
  { path: 'calc', component: CalculateComponent },
  { path: 'router/:id', component: RouterParamsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
