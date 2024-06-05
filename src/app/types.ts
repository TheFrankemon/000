import { SafeUrl } from '@angular/platform-browser'

export type JsonSiloObject = {
  trophies: TrophiesType[],
  countries: CountryType[]
}

export type JsonCollection = keyof JsonSiloObject;

export type TrophiesType = {
  name: string;
  console: 'PS3' | 'PS4' | 'PS5';
  imgUrl: string;
  progress: number;
  trophies: {
    platinum: number;
    gold: number;
    silver: number;
    bronze: number;
  };
}

export type CountryType = {
  name: string
  code: string
  sanitizedUrl?: SafeUrl
  cities?: string[]
  airports: string[]
}
