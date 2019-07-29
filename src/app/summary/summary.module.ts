import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { MobxComponent } from './mobx/mobx.component';
import { Mobx1Component } from './mobx1/mobx1.component';
import { LandingComponent } from './landing/landing.component';
import { ApplyComponent } from './apply/apply.component';
import { CalculateComponent } from './calculate/calculate.component';
import { MatButtonModule } from '@angular/material';
import { RouterParamsComponent } from './router-params/router-params.component';


@NgModule({
  declarations: [MobxComponent, Mobx1Component, LandingComponent, ApplyComponent, CalculateComponent, RouterParamsComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    MatButtonModule
  ]
})
export class SummaryModule { }
