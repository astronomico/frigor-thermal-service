import { Request, Response, NextFunction } from 'express'

export const errorMiddleware = function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(error)
  }

  res.status(500)
  res.json({ error: error })
}
