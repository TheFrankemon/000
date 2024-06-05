import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/json-http.service';
import { TrophiesType } from 'src/app/types';

@Component({
  selector: 'app-ps-trophies',
  templateUrl: './ps-trophies.component.html',
  styleUrls: ['./ps-trophies.component.scss']
})
export class PsTrophiesComponent implements OnInit {

  trophiesData: TrophiesType[] = [];
  loading = true;

  constructor(
    private jsonHttpService: JsonHttpService,
  ) { }

  async ngOnInit() {
    this.trophiesData = await this.jsonHttpService.getAllTrophies();
    this.loading = false;
  }

  getTrophiesObj(gameTrophies: {platinum: number, gold: number, silver: number, bronze: number; }) {
    return Object.entries(gameTrophies);
  }

}
