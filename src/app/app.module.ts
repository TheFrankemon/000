import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkxpComponent } from './workxp/workxp.component';
import { CopyrightFooterComponent } from './copyright-footer/copyright-footer.component';
import { SmIconsComponent } from './sm-icons/sm-icons.component';
import { PassportComponent } from './passport/passport.component';
import { PsTrophiesComponent } from './ps-trophies/ps-trophies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkxpComponent,
    CopyrightFooterComponent,
    SmIconsComponent,
    PassportComponent,
    PsTrophiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
