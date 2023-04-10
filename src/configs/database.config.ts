import mongoose, { MongooseOptions } from 'mongoose'

const FLAG = 'DATABASE'
const baseConfig: MongooseOptions = {
  // Add more configurations for db
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let conn: mongoose.Connection

export const connectDB = async (): Promise<void> => {
  const connection: string = process.env.DATABASE_URI ?? `no connection`
  const options: MongooseOptions = JSON.parse(
    process.env.DATABASE_OPTIONS ?? ''
  )

  const envOptions: MongooseOptions = {
    ...baseConfig,
    ...options
  }

  try {
    const db = await mongoose.connect(connection, envOptions)
    conn = db.connection
    // eslint-disable-next-line no-console
    console.info(`${FLAG}: Connected > `)
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error)
    // return process.exit(1)
  }

  // EVENT TRIGGERS

  conn.once('open', async () => {
    // eslint-disable-next-line no-console
    console.info(`${FLAG}: Open database successfully`)
  })

  conn.on('connected', () => {
    // eslint-disable-next-line no-console
    console.info(`${FLAG}: Connected to database successfully >`)
  })

  conn.on('reconnected', (event: unknown) => {
    // eslint-disable-next-line no-console
    console.info(`${FLAG}: Reconnect to database successfully > ${event}`)
  })

  conn.on('error', (e: unknown) => {
    // eslint-disable-next-line no-console
    console.error(`${FLAG}: Error > ${e}`)
  })
}

export const disconnectDB = () => {
  if (!conn) {
    return
  }

  mongoose.disconnect()
}
