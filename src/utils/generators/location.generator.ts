import { 
    randIp, 
    randLatitude, 
    randLongitude, 
    randCardinalDirection, 
    randOrdinalDirection, 
    randStreetAddress,
    randNearbyGPSCoordinate, 
    randLocale,
    randNumber, 
    randCountry, 
    randCity, 
    randFullAddress,
    randAddress,
    randLanguage
} from '@ngneat/falso'
import WeatherLocation from '../../models/WeatherLocation'
import { IWeatherLocation } from '../../types/location.type'

export const generateWeatherLocation = (): IWeatherLocation => {
    const weatLoc: IWeatherLocation = new WeatherLocation(
            randLatitude(), randLongitude(), randNumber({min: 0.00, max: 10000})
        )
    
    weatLoc.fullAddress = randFullAddress()
    weatLoc.cardinality = randCardinalDirection()
    weatLoc.units = 'metric'
    weatLoc.lang = randLanguage({ code: true })

    console.log(weatLoc)

    return weatLoc
}

export const generateWeatherLocationByAddress = (): IWeatherLocation => {
    const ipAddress = randIp()
    const ipAddressLOng = randIp({ length: 11 })
    const weatLoc = new WeatherLocation(
        randLatitude(), randLongitude(), randNumber({min: 0.00, max: 10000})
    )
    console.table(ipAddress)
    weatLoc.address = ipAddress
    return weatLoc
}
