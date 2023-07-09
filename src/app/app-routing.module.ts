import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PassportComponent } from './passport/passport.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'passport',
  component: PassportComponent
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
