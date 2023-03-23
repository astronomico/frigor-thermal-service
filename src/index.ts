import express, {Express, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app : Express = express();
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response)=>{
    res.send({"running": true, "gears": 1233});

});

app.listen(PORT, ()=>{
    console.log(`[thermal]: Listening on ${PORT}`);
})