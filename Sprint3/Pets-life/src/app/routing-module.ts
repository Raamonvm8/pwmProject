import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component'; 
import { AboutUsComponent } from './pages/aboutUs/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HistoryComponent } from './pages/history/history.component';

const routes: Routes = [
{ path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'init-page', component: InitPageComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }