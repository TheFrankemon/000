import { Component, OnInit } from '@angular/core';
import trophiesObj from './trophies.json';

@Component({
  selector: 'app-ps-trophies',
  templateUrl: './ps-trophies.component.html',
  styleUrls: ['./ps-trophies.component.scss']
})
export class PsTrophiesComponent implements OnInit {

  trophiesData = trophiesObj;

  constructor() { }

  ngOnInit(): void {
  }

  getTrophiesObj(gameTrophies: {platinum: number, gold: number, silver: number, bronze: number; }) {
    return Object.entries(gameTrophies);
  }

}
