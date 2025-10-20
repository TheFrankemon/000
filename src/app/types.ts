import { SafeUrl } from '@angular/platform-browser'

export type JsonSiloObject = {
  trophies: TrophiesType[],
  countries: CountryType[],
  music: MusicType
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
  airports: AirportType[]
}

type AirportType = {
  code: string
  name: string
  city: string
  flightDate: string
  flightNumber: string
  airline: string
}

export type MusicType = {
  genres: GenreType[]
  artists: ArtistType[]
  songs: SongType[]
}

export type GenreType = {
  name: string
  description: string
  icon: string
  subgenres?: string[]
}

export type ArtistType = {
  name: string
  genre: string
  imageUrl: string
}

export type SongType = {
  title: string
  artist: string
  album: string
  duration: string
  genre: string
  year: number
  comment?: string
  imageUrl: string
}
