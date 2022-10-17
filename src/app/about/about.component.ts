import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  enableCSS = false;

  constructor() { }

  ngOnInit(): void {
  }

  get elapsedWorkXP() {
    var prevTime = new Date(2018,8,27,0,0);  // Feb 1, 2011
    var thisTime = new Date();              // now
    const diff = thisTime.getTime() - prevTime.getTime();   // now - Feb 1

    return diff / (1000*60*60*24*30*12);
  }

  get currentDay() {
    return new Date();
  }

  toggleCSS() {
    this.enableCSS = !this.enableCSS;
  }
}
