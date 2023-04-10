import { Router } from 'express'
import WeatherController from '../../../controllers/weather.controller'

const weatherRoutes = Router()
const weatherController = new WeatherController()

// GET CURRENT FORECAST
weatherRoutes.get('/current', weatherController.getCurrentWeather)
// GET FORECAST BY LOCATION
weatherRoutes.get('/forecast', weatherController.getForecast)
// GET RADIATION FROM LOCATION
weatherRoutes.get('/radiation', weatherController.getRadiation)

export default weatherRoutes
