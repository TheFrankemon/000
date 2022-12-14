import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @HostBinding('id') id = 'home';
  blurryFranco = false;

  constructor() { }

  @HostListener('window:scroll') // for window scroll events
  onScroll() {
    const verticalOffset = window.pageYOffset;
    this.blurryFranco = verticalOffset > 700;
  }

}
