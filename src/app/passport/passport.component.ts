import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {

  categories = [{
    name: 'PS Trophies',
    bgImage: 'trophies.jpg',
    locked: false,
    route: 'pstrophies'
  }, {
    name: 'Music Library',
    bgImage: 'music.jpg',
    locked: true,
    route: 'music'
  }, {
    name: 'Countries',
    bgImage: 'countries.jpg',
    locked: true,
    route: 'countries'
  }, {
    name: 'Food',
    bgImage: 'food.jpg',
    locked: true,
    route: 'food'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
