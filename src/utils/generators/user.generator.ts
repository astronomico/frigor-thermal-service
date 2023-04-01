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
    randCetacean, 
    randAddress, 
    randAvatar, 
    randFish,
    randUserName
} from '@ngneat/falso'
import WeatherLocation from '../../models/WeatherLocation'
import { IWeatherLocation } from '../../types/location.type'
import { IUser } from '../../types/user.types'

export const generateUser = (): IUser => {
    const weatLoc = new WeatherLocation(
            randLatitude(), randLongitude(), randNumber({min: 0.00, max: 10000})
        )
    
    const user: IUser = {
        username: randFish().split(' ').join('.').replace(/[^a-zA-Z ]/g, "").toLowerCase() + randNumber({min: 1, max: 999}),
        avatar: randAvatar(),
        preferences: {
            interfaceLight: 'dark',
            interfaceUnits: 'metric'
        }
    }

    return user
}
