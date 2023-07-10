import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {

  categories = [{
    name: 'Countries',
    bgImage: 'countries.jpg'
  }, {
    name: 'PS Trophies',
    bgImage: 'trophies.jpg'
  }, {
    name: 'Music Library',
    bgImage: 'music.jpg'
  }, {
    name: 'Food',
    bgImage: 'food.jpg'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
