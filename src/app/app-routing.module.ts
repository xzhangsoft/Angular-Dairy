import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCanNotFoundComponent } from './page-can-not-found/page-can-not-found.component';


const routes: Routes = [
  {
    path: 'odyssey',
    loadChildren: () => import('./odyssey/odyssey.module').then(mod => mod.OdysseyModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then(mod => mod.SummaryModule),
    data: {
      type: 'normal'
    }
  },
  {
    path: 'summary-special',
    loadChildren: () => import('./summary/summary.module').then(mod => mod.SummaryModule),
    data: {
      type: 'special'
    }
  },
  {
    path: 'customers',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./tabs/tabs.module').then(mod => mod.TabsModule)
  },
  {//重定向路由
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
  { path: '**', component: PageCanNotFoundComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })], //  debugging purposes only
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
