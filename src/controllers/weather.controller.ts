import { getForecast, getRadiation } from '../services/open-weather.service'
import { IController } from '../types/controller.type'
import { IWeatherLocation } from '../types/location.type'
import { generateWeatherLocation } from '../utils/generators/location.generator'
import { Request, Response, NextFunction } from 'express-serve-static-core'

export default class WeatherController implements IController {
  FLAG = 'WeatherController: '

  public async getCurrentWeather(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json({})
  }

  public async getForecast(req: Request, res: Response, next: NextFunction) {
    const location: IWeatherLocation = generateWeatherLocation()
    const forecast = await getForecast(location)
    res.json(forecast)
  }

  public async getRadiation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const location: IWeatherLocation = generateWeatherLocation()
    const radiation = await getRadiation(location)

    console.table(location)

    res.json(radiation)
  }
}
