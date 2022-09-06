import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import { ComponentUiErrorComponent } from './component-ui-error/component-ui-error.component';
import { ScreenCaprevbybidComponent } from './screen-caprevbybid/screen-caprevbybid.component';

const routes: Routes = [
  {path: '', component: ComponentDashboardComponent},
  {path: 'dashboard', component: ComponentDashboardComponent},
  {path: 'caprevbybid', component: ScreenCaprevbybidComponent},
  {path: '**', component: ComponentUiErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
