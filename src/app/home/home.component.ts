import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public window = window;
  blurryFranco = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll') // for window scroll events
  onScroll() {
    const verticalOffset = window.pageYOffset;
    this.blurryFranco = verticalOffset > 700;
  }

}
