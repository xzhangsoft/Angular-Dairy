import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ChildComponent } from './landing/child/child.component';
import { Child2Component } from './landing/child2/child2.component';


@NgModule({
  declarations: [LandingComponent, ChildComponent, Child2Component],
  imports: [
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
