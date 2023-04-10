import express, { Express } from 'express'
import { errorMiddleware } from '../middlewares/error.middleware'
import apis from '../apis'
import { connectDB } from '../configs/database.config'
// import {should} from 'chai'

export default class Server {
  private app: Express
  private PORT: number
  constructor() {
    this.app = express()
    this.PORT = Number(process.env.PORT) ?? -1
    // (PORT).should.be.Number()
    this.setUp()
  }

  private setUp() {
    this.setMiddlewares()
    this.app.use('/api', apis)
  }

  private setMiddlewares() {
    this.app.use(express.json())
    this.app.use(errorMiddleware)
  }

  public async start() {
    await connectDB()

    this.app.listen(this.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`[thermal]: Listening on ${this.PORT}`)
    })
  }
}
