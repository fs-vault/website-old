import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { StaffComponent } from './pages/staff/staff.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RulesComponent } from './pages/rules/rules.component';
import { OpensourceComponent } from './pages/opensource/opensource.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'staff',
        component: StaffComponent,
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      },
      {
        path: 'rules',
        component: RulesComponent,
      },
      {
        path: 'opensource',
        component: OpensourceComponent,
      },
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
