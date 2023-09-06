import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewDetailsPageRoutingModule } from './view-details-routing.module';
import { ViewDetailsPage } from './view-details.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ViewDetailsPageRoutingModule
  ],
  declarations: [ViewDetailsPage]
})
export class ViewDetailsPageModule {}
