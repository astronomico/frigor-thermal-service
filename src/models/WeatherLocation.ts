import { InterfaceUnitsType, IWeatherLocation } from "../types/location.type"

export default class WeatherLocation implements IWeatherLocation {
    latitude: number
    longitude: number
    altitude: number
    address?: string
    country?: string
    city?: string
    cardinality?: string
    ordinal?: number
    fullAddress?: string | undefined
    lang?: string
    units?: InterfaceUnitsType

    constructor(latitude: number, longitude: number, altitude: number){
        this.latitude = latitude ?? 0
        this.longitude = longitude ?? 0
        this.altitude = altitude ?? 0
        
    }
    
}