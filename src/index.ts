import express, {Express, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import * as should from 'should';
import api1Router from './apis/v1/routes';

dotenv.config();

const app : Express = express();
const PORT = process.env.PORT ?? -1;

console.log(PORT);

// (PORT).should.be.Number();

app.use(express.json());

app.use('/v1', api1Router)

app.listen(PORT, ()=>{
    console.log(`[thermal]: Listening on ${PORT}`);
})