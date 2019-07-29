import { ChildComponent } from './landing/child/child.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Child2Component } from './landing/child2/child2.component';


const routes: Routes = [{
  path: 'landing',
  component: LandingComponent,
  redirectTo: 'child',
  data: { animation: 'landing' }
},
{
  path: 'child',
  component: ChildComponent
},
{
  path: 'child2',
  component: Child2Component,
  data: { animation: 'child2' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
