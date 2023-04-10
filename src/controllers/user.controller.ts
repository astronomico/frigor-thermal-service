import { log } from 'console'
import { IUserModel, UserModel } from '../models/User'
import { IController } from '../types/controller.type'
import { IUser } from '../types/user.types'
import { generateUser } from '../utils/generators/user.generator'
import { Request, Response, NextFunction } from 'express'

export default class UserController implements IController {
  FLAG = 'UserController:'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const userId = req.params.id
    if (!userId) next(new Error('User not provided'))

    res.json({ user: 4543543 })
  }

  public async postUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log(req.params.id)
    const user: IUser = req.body
    try {
      const res = await UserModel.create(user)
    } catch (error) {}
    res.json({})
  }

  public async getUserSettings(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log(req.params.id)

    res.json({ user: generateUser() })
  }

  public async postUserSettings(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log(req.params.id)

    res.json({ user: generateUser() })
  }

  public async generateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json({ user: generateUser() })
  }

  public middleware(req: Request, res: Response, next: NextFunction) {
    const midData: any = req.body
    // console.log(`${this.FLAG} middleware intercepting ${midData}`)
    console.log('middle')

    return next()
  }
}
