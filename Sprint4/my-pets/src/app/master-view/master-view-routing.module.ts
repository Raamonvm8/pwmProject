import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterViewPage } from './master-view.page';

const routes: Routes = [
  {
    path: '',
    component: MasterViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterViewPageRoutingModule {}
