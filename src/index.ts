import Server from "./models/Server"
import dotenv from 'dotenv'

dotenv.config()

// Init server instance
const server = new Server()

// Listen
server.start()
