const SERVICE_URL_BASE = 'http://ip-api.com/json'
const params = new URLSearchParams()
import axios, {
  isCancel,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { ILocation, ILocationResponse } from '../types/location.type'
import { generateWeatherLocationByAddress } from '../utils/generators/location.generator'

const FLAGS = 'Location Service'

export const getIpApiLocation = async (
  origin: string
): Promise<ILocationResponse> => {
  if (origin.length < 5)
    return Promise.reject(new Error(`${FLAGS}:Invalid origin`))

  const axiosConfig: AxiosRequestConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      fields:
        'status,message,country,countryCode,region,regionName,city,district,zip,lat,lon'
    }
  }

  const r = await axios.get<ILocationResponse>(
    `${SERVICE_URL_BASE}/${origin}`,
    axiosConfig
  )

  return r.data
}
