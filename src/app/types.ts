import { SafeUrl } from '@angular/platform-browser'

export type JsonSiloObject = {
  trophies: any,
  countries: CountryType[]
}

export type CountryType = {
  name: string
  code: string
  sanitizedUrl?: SafeUrl
  cities?: string[]
  airports: string[]
}
