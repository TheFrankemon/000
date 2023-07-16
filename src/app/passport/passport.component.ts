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
    locked: false
  }, {
    name: 'Music Library',
    bgImage: 'music.jpg',
    locked: true
  }, {
    name: 'Countries',
    bgImage: 'countries.jpg',
    locked: true
  }, {
    name: 'Food',
    bgImage: 'food.jpg',
    locked: true
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
