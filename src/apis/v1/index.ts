import { Router, Request, Response, NextFunction } from 'express'
import locationRoutes from './routes/location.routes'
import userRoutes from './routes/user.routes'
import weatherRoutes from './routes/weather.routes'

const router = Router()
const FLAGS = 'Thermal API v1:'

// API V1 INTEGRATION

router.get('/', (req: Request, res: Response) => {
  res.send({ information: `${FLAGS} Running` })
})

router.use('/user', userRoutes)
router.use('/location', locationRoutes)
router.use('/weather', weatherRoutes)

export default router
