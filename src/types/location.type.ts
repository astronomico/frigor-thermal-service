export interface ILocationRequest {
  userAddress: string
}

export interface ILocation {
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
}

export interface ILocationResponse extends ILocation {
  status: ILocationResponseStatus
  message: string
  query: string
}

export enum ILocationResponseStatus {
  success = 'success',
  error = 'error'
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

export interface IWeatherLocation {
  latitude: number
  longitude: number
  altitude: number
  address?: string
  country?: string
  city?: string
  cardinality?: string
  ordinal?: number
  fullAddress?: string
  lang?: string
  units?: InterfaceUnitsType
}

export type InterfaceUnitsType = 'metric' | 'imperial'
