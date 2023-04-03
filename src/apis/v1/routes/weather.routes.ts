

import { Router, Request, Response, NextFunction } from "express"
import { getForecast, getRadiation } from "../../../services/open-weather.service"
import { IWeatherLocation } from "../../../types/location.type"
import { generateWeatherLocation } from "../../../utils/generators/location.generator"
const weatherRoutes = Router()

weatherRoutes.get('/current', (req: Request, res: Response)=>{
    res.json({"running": true, "gears": 1233})
})

weatherRoutes.get('/forecast', async (req: Request, res: Response, next: NextFunction)=>{
    const location: IWeatherLocation = generateWeatherLocation()
    const forecast = await getForecast(location)
    res.json(forecast)

})

weatherRoutes.get('/radiation', async (req: Request, res: Response, next: NextFunction)=> {
    const location: IWeatherLocation = generateWeatherLocation()
    console.table(location)
    const radiation = await getRadiation(location)
    res.json(radiation)

})

export default weatherRoutes