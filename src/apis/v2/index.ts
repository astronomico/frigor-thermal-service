import { Router, Request, Response, NextFunction } from 'express'
const router = Router()

// API V2 INTEGRATION

router.get('/', (req: Request, res: Response) => {
  res.json({ information: 'API V2' })
})

export default router
