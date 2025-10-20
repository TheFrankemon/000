import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassportComponent } from './passport/passport.component';
import { PsTrophiesComponent } from './passport/ps-trophies/ps-trophies.component';
import { CountriesComponent } from './passport/countries/countries.component';
import { MusicComponent } from './passport/music/music.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'passport',
  component: PassportComponent
}, {
  path: 'passport/pstrophies',
  component: PsTrophiesComponent
}, {
  path: 'passport/countries',
  component: CountriesComponent
}, {
  path: 'passport/music',
  component: MusicComponent
}, {
  path: '**',
  // redirectTo: '/not-found',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
