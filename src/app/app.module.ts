import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from './user-module/user-module.module';
import { PageCanNotFoundComponent } from './page-can-not-found/page-can-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService, CookieModule } from 'ngx-cookie';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MobxAngularModule,
    UserModuleModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, MarkdownModule.forRoot(),
    CookieModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    PageCanNotFoundComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
