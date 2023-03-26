
import express, {Express, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import * as should from 'should';
import apis from '../apis';

dotenv.config();

export default class Server {
    private app : Express;
    private PORT: number;
    constructor(){
        this.app = express();
        this.PORT = Number(process.env.PORT) ?? -1;

        console.log(this.PORT);
        // (PORT).should.be.Number();
        this.setUp();

    }

    private setUp() {
        this.app.use(express.json());
        this.app.use('/api', apis);
    }

    public start(){
        this.app.listen(this.PORT, ()=>{
            console.log(`[thermal]: Listening on ${this.PORT}`);
        });
    }
}