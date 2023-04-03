import { Router, Request, Response, NextFunction } from "express"
import { getIpApiLocation } from "../../services/ip-api.service"
import { getForecast, getRadiation } from "../../services/open-weather.service"
import { ILocationResponse, ILocationResponseStatus, IWeatherLocation } from "../../types/location.type"
import { generateWeatherLocation, generateWeatherLocationByAddress } from "../../utils/generators/location.generator"
import { generateUser } from "../../utils/generators/user.generator"
import locationRoutes from "./routes/location.routes"
import userRoutes from "./routes/user.routes"
import weatherRoutes from "./routes/weather.routes"

const router = Router()

// API V1 INTEGRATION

router.get('/', (req: Request, res: Response)=>{
    res.send({"running": true})

})

router.use('/user', userRoutes)
router.use('/location', locationRoutes)
router.use('/weather', weatherRoutes)

export default router