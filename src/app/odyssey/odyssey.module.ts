import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OdysseyRoutingModule } from './odyssey-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main/main.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [HeaderComponent, NavComponent, ContentComponent, MainComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    OdysseyRoutingModule
  ]
})
export class OdysseyModule { }
