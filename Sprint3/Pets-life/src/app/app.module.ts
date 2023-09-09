import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module';
import { HeaderComponent } from './pages/components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './pages/components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/aboutUs/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomepageComponent,
    AboutUsComponent,
    OurServicesComponent,
    SignUpComponent,
    InitPageComponent,
    ReservationComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
