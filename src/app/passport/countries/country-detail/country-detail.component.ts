import { Component, EventEmitter, Inject, InjectionToken, OnInit } from '@angular/core';
import { CountryType } from 'src/app/types';

export const CONTAINER_DATA = new InjectionToken<string>('CONTAINER_DATA');

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  closeEmitter = new EventEmitter<void | boolean>();

  constructor(
    @Inject(CONTAINER_DATA) public countryData: CountryType,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.closeEmitter.emit();
  }
}
