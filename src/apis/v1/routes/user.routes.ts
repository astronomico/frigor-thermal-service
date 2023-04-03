import { Router, Request, Response, NextFunction } from 'express'
import { generateUser } from '../../../utils/generators/user.generator'

const userRoutes = Router()

userRoutes.get('/', (req: Request, res: Response) => {
  res.json({ user: generateUser() })
})

export default userRoutes
