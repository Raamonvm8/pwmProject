import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'favourite-list',
        loadChildren: () => import('../favorite-list/favorite-list.module').then(m => m.FavoriteListPageModule)
      },
      {
        path: 'master-view',
        loadChildren: () => import('../master-view/master-view.module').then(m => m.MasterViewPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../sign-up/sign-up.module').then(m => m.SignUpPageModule)
      },
      {
        path: 'sign-in',
        loadChildren: () => import('../sign-in/sign-in.module').then(m => m.SignInPageModule)
      },
      {
        path: 'view-details',
        loadChildren: () => import('../view-details/view-details.module').then(m => m.ViewDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/master-view',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/master-view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
