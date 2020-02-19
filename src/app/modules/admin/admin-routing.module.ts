import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminContainerComponent } from './layout/admin-container.component';

const routes: Routes = [
  { path: 'admin', component: AdminContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
