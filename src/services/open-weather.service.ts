import { IWeatherLocation } from '../types/location.type'
import IRadiation from '../types/radiation.type'
import axios, { isCancel, AxiosError, AxiosRequestConfig } from 'axios'
import { IWeatherResponse } from 'types/weather.types'

const FLAGS = 'Weahter Service:'

export const getRadiation = async (location: IWeatherLocation) => {
  const SERIVICE_URL_RADIATION = `${process.env.SERVICE_URL_OPEN_WEATHER_V2_RADIATION}${process.env.SERVICE_PATH_RADIATION}`
  const API_KEY_OPEN_WEATHER = process.env.API_KEY_OPEN_WEATHER

  const axiosConfig: AxiosRequestConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      lat: location.latitude,
      lon: location.longitude,
      appid: API_KEY_OPEN_WEATHER,
      lang: location.lang,
      units: location.units
    }
  }

  const apiResponse = await axios.get(SERIVICE_URL_RADIATION, {
    params: {
      lat: location.latitude,
      lon: location.longitude,
      appid: API_KEY_OPEN_WEATHER
    }
  })

  if (apiResponse.status != 200) {
    const error = new Error(`${FLAGS}${apiResponse.data}`)
    error.name = apiResponse.status.toString()
    console.log(error)
    return error
  }

  const radiation = apiResponse.data
  console.table(radiation)

  return radiation
}

export const getForecast = async (
  location: IWeatherLocation
): Promise<IWeatherResponse> => {
  const API_KEY = process.env.API_KEY_OPEN_WEATHER
  const URL = process.env.SERVICE_URL_OPEN_WEATHER_V2_FORECAST
  const PATH = process.env.SERVICE_PATH_FORECAST

  // todo GET UNITS FROM CURRENT USER PREFERENCES

  const axiosConfig: AxiosRequestConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      lat: location.latitude,
      lon: location.longitude,
      appid: API_KEY,
      lang: location.lang,
      units: location.units
    }
  }

  const request = `${URL}${PATH}`
  const response = await axios.get<IWeatherResponse>(request, axiosConfig)

  if (response.data.cod != '200') {
    Promise.reject(new Error(`${FLAGS}${response.data.message}`))
  }

  return response.data
}
