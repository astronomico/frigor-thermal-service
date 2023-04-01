import { Router, Request, Response, NextFunction } from "express"
import { getIpApiLocation } from "../../services/ip-api.service"
import { getForecast, getRadiation } from "../../services/open-weather.service"
import { ILocationResponse, ILocationResponseStatus, IWeatherLocation } from "../../types/location.type"
import { generateWeatherLocation, generateWeatherLocationByAddress } from "../../utils/generators/location.generator"
import { generateUser } from "../../utils/generators/user.generator"
const router = Router()

// API V1 INTEGRATION

router.get('/', (req: Request, res: Response)=>{
    res.send({"running": true})

})

router.get('/user', (req: Request, res: Response)=>{
    res.json({"user": generateUser()})

})


router.get('/location', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let address = req.header('x-forwarded-for') || req.socket.remoteAddress || req.ip;
    console.table(address)
    console.table(req.query)
    address = address.toString().replace('::ffff:', '')

    const gen = generateWeatherLocationByAddress()
    const locationResponse: ILocationResponse = await getIpApiLocation(gen.address || req.ip)

    if (locationResponse.status!= ILocationResponseStatus.success) {
        next(Error(`Invalid ${locationResponse.status} ${locationResponse.message}`))
    }

    res.json(locationResponse)

})

router.get('/current', (req: Request, res: Response)=>{
    res.json({"running": true, "gears": 1233})

})

router.get('/forecast', async (req: Request, res: Response, next: NextFunction)=>{
    
    const location: IWeatherLocation = generateWeatherLocation()
    const forecast = await getForecast(location)
    res.json(forecast)

})

router.get('/radiation', async (req: Request, res: Response, next: NextFunction)=> {
    const location: IWeatherLocation = generateWeatherLocation()
    console.table(location)
    const radiation = await getRadiation(location)
    res.json(radiation)
})

export default router