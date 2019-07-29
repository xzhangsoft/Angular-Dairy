import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MatInputModule } from '@angular/material';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [LandingComponent, MainComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule
  ]
})
export class LoginModule { }
