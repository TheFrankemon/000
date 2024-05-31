import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Component, Injector, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CONTAINER_DATA, CountryDetailComponent } from './country-detail/country-detail.component';

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
  selectedCountry: string | undefined;

  constructor(
    private sanitizer: DomSanitizer,
    public overlay: Overlay,
    private injector: Injector
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

  createInjector(d: string): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, d);
    return new PortalInjector(this.injector, injectorTokens);
  }

  openCountryDetails(countryIndex: number) {
    if (this.selectedCountry === this.visitedCountries[countryIndex].code) {
      return;
    }

    this.selectedCountry = this.visitedCountries[countryIndex].code;

    const overlayConfig: OverlayConfig = {
      width: '310px',
      // panelClass: 'absolute-overlay',
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().right().centerVertically()
    };

    const overlayRef = this.overlay.create(overlayConfig);

    const data = this.visitedCountries[countryIndex].name;
    const countryPortal = new ComponentPortal(CountryDetailComponent, null, this.createInjector(data));
    const countryPortalRef = overlayRef.attach(countryPortal);

    merge(overlayRef.backdropClick(), countryPortalRef.instance.closeEmitter).subscribe(s => {
      this.selectedCountry = undefined;
      overlayRef.dispose();
    })
  }
}
