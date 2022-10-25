import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  enableCSS = false;
  leapYears = [2020, 2024, 2028, 2032, 2036, 2040];

  constructor() { }

  ngOnInit(): void {
  }

  get elapsedWorkXP() {
    let prevTime = new Date(2018,8,24,0,0);
    let now = new Date();
    const diffInMs = Math.floor(now.getTime() - prevTime.getTime());

    // Leap year correctinon
    let extraDays = this.leapYears.filter(y => y < now.getFullYear()).length;

    let days = Math.floor(diffInMs/1000/60/60/24) + extraDays;
    let months = Math.floor(days/30.42);
    const years = Math.floor(months/12);
    months = Math.floor(months%12);
    days = Math.floor(days%30.42);

    return `${years}y ${months}m ${days}d`;
  }

  get currentDay() {
    return new Date();
  }

  toggleCSS() {
    this.enableCSS = !this.enableCSS;
  }
}
