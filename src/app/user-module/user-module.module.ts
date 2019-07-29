import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { RootService } from '../root.service';


@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserModuleModule,
      providers: [
        { provide: RootService }
      ]
    };
  }
}
