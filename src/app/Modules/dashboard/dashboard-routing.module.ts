import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'manager', loadChildren: () => import('./subModules/manager/manager.module').then(m => m.ManagerModule) }, 
  { path: 'employee', loadChildren: () => import('./subModules/employee/employee.module').then(m => m.EmployeeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }