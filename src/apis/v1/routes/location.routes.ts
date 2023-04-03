

import { Router, Request, Response, NextFunction } from "express"
import { getIpApiLocation } from "../../../services/ip-api.service"
import { ILocationRequest, ILocationResponse, ILocationResponseStatus } from "../../../types/location.type"
import { generateWeatherLocationByAddress } from "../../../utils/generators/location.generator"
import { generateUser } from "../../../utils/generators/user.generator"
const locationRoutes = Router()

locationRoutes.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const {userAddress}: ILocationRequest = req.body
    let address = userAddress || req.header('x-forwarded-for') || req.socket.remoteAddress || req.ip;
    const gen = generateWeatherLocationByAddress()
    const locationResponse: ILocationResponse = await getIpApiLocation(gen.address || address)
    
    console.table(address)
    console.table(req.query)
    
    address = address.toString().replace('::ffff:', '')

    if (locationResponse.status!= ILocationResponseStatus.success) {
        next(Error(`Invalid ${locationResponse.status} ${locationResponse.message}`))
    }

    res.json(locationResponse)

})

export default locationRoutes