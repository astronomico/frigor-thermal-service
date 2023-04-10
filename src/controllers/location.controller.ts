import { getLocationService } from '../services/location.service'
import { IController } from '../types/controller.type'
import {
  ILocation,
  ILocationBase,
  ILocationResponse,
  ILocationResponseStatus
} from '../types/location.type'
import { Request, Response, NextFunction } from 'express'

export default class LocationController implements IController {
  FLAG = 'LocationController: '

  public async getLocation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const base: ILocationBase = req.body
    // const gen = generateWeatherLocationByAddress()
    const origin =
      req.header('x-forwarded-for') || req.socket.remoteAddress || null

    base.userAddress = base.userAddress || origin || null

    if (!base.userAddress) return next(new Error('No address provided'))

    const locationResponse: ILocationResponse = await getLocationService(base)

    if (locationResponse.status != ILocationResponseStatus.success) {
      res.status(500)
      next(
        Error(`Invalid ${locationResponse.status} ${locationResponse.message}`)
      )
    }

    const location: ILocation = { ...base, ...locationResponse }

    res.json(location)
  }
  public async getTest(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json(23232)
  }
}
