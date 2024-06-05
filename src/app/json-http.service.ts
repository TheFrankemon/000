import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { CountryType, JsonCollection, JsonSiloObject, TrophiesType } from './types';

@Injectable({
  providedIn: 'root'
})
export class JsonHttpService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchDataCollection(collection: JsonCollection) {
    const url = 'https://api.jsonsilo.com/public/1f8e654b-008a-4ee0-8e20-98034415aece';
    const headers = new HttpHeaders({
      // 'X-SILO-KEY': process.env.JSONSILO_API_KEY!,
      'Content-Type': 'application/json'
    });

    return lastValueFrom(this.http.get<JsonSiloObject>(url, { headers: headers}).pipe(
      map(res => res[collection])
    ));
  }

  getAllCountries() {
    return this.fetchDataCollection('countries') as Promise<CountryType[]>;
  }
  
  getAllTrophies() {
    return this.fetchDataCollection('trophies') as Promise<TrophiesType[]>;
  }
}
