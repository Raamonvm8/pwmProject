import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewPage } from '../master-view/master-view.page';

const routes: Routes = [
  {
    path: '',
    component: MasterViewPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
