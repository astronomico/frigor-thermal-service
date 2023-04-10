import { InterfaceUnitsType } from './settings.type'

export type LocationLanguageType =
  | 'en'
  | 'es'
  | 'fr'
  | 'it'
  | 'de'
  | 'ru'
  | 'zh'
  | 'ja'
  | 'pt'

// Location base properties
export interface ILocationBase {
  userAddress: string | null
  alt?: number
  lat: number | null
  lon: number | null
  lang?: LocationLanguageType
}

// Pure location info
export interface ILocation extends ILocationBase {
  country?: string
  countryCode?: string
  region?: string
  regionName?: string
  city?: string
  zip?: string
  timezone?: string
}

// Location service response and response status
export interface ILocationResponse extends ILocation {
  status: ILocationResponseStatus
  message?: ILocationResponseMessage
  query?: string
}

export enum ILocationResponseStatus {
  success = 'success',
  error = 'error'
}

export enum ILocationResponseMessage {
  queryError = 'invalid query',
  privacyError = 'private range',
  reservedError = 'reserved range'
}

export interface IWeatherLocation {
  latitude?: number
  longitude?: number
  altitude?: number
  address?: string
  country?: string
  city?: string
  cardinality?: string
  ordinal?: number
  fullAddress?: string
  lang?: string
  units?: InterfaceUnitsType
}

export interface ICity {
  id: number
  name: string
  coord: ICoord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface ICoord {
  lat: number
  lon: number
}
export { InterfaceUnitsType }
