import { Router } from 'express'
import LocationController from '../../../controllers/location.controller'

const locationRoutes = Router()
const locationController = new LocationController()

// GET LOCATION INFORMATION
locationRoutes.get('/', locationController.getLocation)
// TEST LOCATION SERVICE
locationRoutes.get('/test', locationController.getTest)

export default locationRoutes
