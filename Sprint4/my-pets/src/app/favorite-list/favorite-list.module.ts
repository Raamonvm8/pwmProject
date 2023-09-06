import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteListPageRoutingModule } from './favorite-list-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FavoriteListPage } from './favorite-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    FavoriteListPageRoutingModule
  ],
  declarations: [FavoriteListPage]
})
export class FavoriteListPageModule {}
