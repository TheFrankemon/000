import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  visitedCountries: {
    name: string
    code: string
    sanitizedUrl?: SafeUrl
  }[];
  hovered: number;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.visitedCountries = [{
      name: "Argentina",
      code: "ar"
    }, {
      name: "Bolivia",
      code: "bo"
    }, {
      name: "Brazil",
      code: "br"
    }, {
      name: "Chile",
      code: "cl"
    }, {
      name: "Egypt",
      code: "eg"
    }, {
      name: "Japan",
      code: "jp"
    }, {
      name: "Peru",
      code: "pe"
    }, {
      name: "Spain",
      code: "es"
    }, {
      name: "Turkey",
      code: "tr"
    }, {
      name: "USA",
      code: "us"
    }]

    this.hovered = -1;
  }

  ngOnInit(): void {
    this.visitedCountries = this.visitedCountries.map(item => ({
      ...item,
      sanitizedUrl: this.sanitizeURL(`assets/countries/${item.code}.svg`)
    }));
  }

  sanitizeURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  test() {
    alert('sdada');
  }
}
