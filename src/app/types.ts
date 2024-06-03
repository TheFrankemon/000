import { SafeUrl } from '@angular/platform-browser'

export type CountryType = {
  name: string
  code: string
  sanitizedUrl?: SafeUrl
  cities?: string[]
  airports: string[]
}
