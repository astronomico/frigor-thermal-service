import {
  randLocale,
  randNumber,
  randCetacean,
  randAvatar,
  randFish,
  randUserName
} from '@ngneat/falso'
import WeatherLocation from '../../models/WeatherLocation'
import { IWeatherLocation } from '../../types/location.type'
import { IUser } from '../../types/user.types'

export const generateUser = (): IUser => {
  const magicName = randFish()
  const username = generateUsername(magicName)
  return {
    firstname: magicName.toLocaleUpperCase(),
    username,
    avatar: randAvatar(),
    preferences: {
      interfaceLight: 'dark',
      interfaceUnits: 'metric',
      lang: 'en'
    }
  }
}

export const generateUsername = (baseName: string = randFish()) =>
  baseName
    .split(' ')
    .join('.')
    .replace(/[^a-zA-Z ]/g, '')
    .toLowerCase() + randNumber({ min: 1, max: 999 })
