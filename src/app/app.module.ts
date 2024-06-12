import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkxpComponent } from './workxp/workxp.component';
import { CopyrightFooterComponent } from './copyright-footer/copyright-footer.component';
import { SmIconsComponent } from './sm-icons/sm-icons.component';
import { PassportComponent } from './passport/passport.component';
import { PsTrophiesComponent } from './passport/ps-trophies/ps-trophies.component';
import { CountriesComponent } from './passport/countries/countries.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { CountryDetailComponent } from './passport/countries/country-detail/country-detail.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkxpComponent,
    CopyrightFooterComponent,
    SmIconsComponent,
    PassportComponent,
    PsTrophiesComponent,
    CountriesComponent,
    BackButtonComponent,
    CountryDetailComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
