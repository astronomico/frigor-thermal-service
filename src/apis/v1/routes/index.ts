import { Router, Request, Response, NextFunction } from "express";
const api1Router = Router();

api1Router.get('/', (req: Request, res: Response)=>{
    res.send({"running": true, "gears": 1233});

});

api1Router.get('/location', (req: Request, res: Response)=>{
    const {location, metadata} = req.body;

    console.table(req.params);
    console.table(req.query);
    console.table(req.ip);
    console.table(req.body);
    console.log(`${(typeof metadata)} is ${metadata}`);
    console.log(`${(typeof location)} is ${location}`);

    res.send({location, metadata});

});

api1Router.get('/current', (req: Request, res: Response)=>{
    res.send({"running": true, "gears": 1233});

});

api1Router.get('/forecast', async (req: Request, res: Response, next: NextFunction)=>{
    res.send({"running": true, "gears": 1233});

});


export default api1Router;