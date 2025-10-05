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
  trophiesSummary = {platinum: 0, gold: 0, silver: 0, bronze: 0};
  trophiesLevel = {pslevel: 218, total: 0};
  loading = true;

  constructor(
    private jsonHttpService: JsonHttpService,
  ) { }

  async ngOnInit() {
    this.trophiesData = await this.jsonHttpService.getAllTrophies();
    this.trophiesSummary = this.trophiesData.reduce((acc, game) => {
      acc.platinum += game.trophies.platinum;
      acc.gold += game.trophies.gold;
      acc.silver += game.trophies.silver;
      acc.bronze += game.trophies.bronze;
      return acc;
    }, this.trophiesSummary);
    this.trophiesLevel = this.trophiesData.reduce((acc, game) => {
      acc.total += game.trophies.platinum + game.trophies.gold + game.trophies.silver + game.trophies.bronze;
      return acc;
    }, this.trophiesLevel);

    this.loading = false;
  }

  getTrophiesObj(gameTrophies: TrophiesType['trophies']) {
    const order: (keyof TrophiesType['trophies'])[] = ['platinum', 'gold', 'silver', 'bronze'];
    return order.map(key => [key, gameTrophies[key]]);
  }

}
