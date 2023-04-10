const params = new URLSearchParams()
import axios, { AxiosRequestConfig, isAxiosError } from 'axios'
import {
  ILocation,
  ILocationBase,
  ILocationResponse
} from '../types/location.type'

const FLAGS = 'Location Service'

export const getLocationService = async (
  locationBase: ILocationBase
): Promise<ILocationResponse> => {
  const SERVICE_URL_BASE = process.env.LOCATION_SERVICE_URL || null

  if (!locationBase.userAddress)
    return Promise.reject(new Error(`${FLAGS}:Invalid origin`))

  const fields =
    'status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone'
  const lang = locationBase.lang
  const axiosConfig: AxiosRequestConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: { fields, lang }
  }

  try {
    const res = await axios.get<ILocationResponse>(
      `${SERVICE_URL_BASE}/${locationBase.userAddress}`,
      axiosConfig
    )
    return res.data
  } catch (error: any) {
    if (error === Error) error.message = `${FLAGS}: ${error.message}`
    if (isAxiosError(error)) {
      // FIXME
      // eslint-disable-next-line no-console
      console.error('is axios error' + error)
      return Promise.reject(error)
    } else return Promise.reject(error)
  }
}

export const getRefreshLocationService = async (
  locationBase: ILocation
): Promise<ILocation> => {
  const response = await axios.get<ILocation>('34')
  const responseLocation: ILocation = response.data
  return responseLocation
}
