import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  screenWidth = 0;
  scrPercentLeft = 50;
  scrPercentRight = 50;
  wait = false;
  tps = 10;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.screen.availWidth;
  }

  @HostListener("mousemove", ['$event.clientX'])
  enhancedMouseHandler($event: number) {
    if (!this.wait) {
      const mouseX = $event;
      const mouseAtPercent = Math.round((mouseX / this.screenWidth) * 100);
      if (mouseAtPercent < 10) {
        this.scrPercentLeft = 95;
      } else if (mouseAtPercent > 90) {
        this.scrPercentLeft = 5;
      }
      this.scrPercentRight = 100 - this.scrPercentLeft;

      this.wait = true;
      setTimeout(() => {
        this.wait = false;
      }, 1000/ this.tps);
    }
  }
}
