import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MasterViewPageRoutingModule } from './master-view-routing.module';
import { MasterViewPage } from './master-view.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    MasterViewPageRoutingModule
  ],
  declarations: [MasterViewPage]
})
export class MasterViewPageModule {}
