import { Router, Request, Response, NextFunction } from "express";
const router = Router();

// API V1 INTEGRATION

router.get('/', (req: Request, res: Response)=>{
    res.send({"running": true, "gears": 1233});

});

router.get('/location', (req: Request, res: Response)=>{
    const {location, metadata} = req.body;

    console.table(req.params);
    console.table(req.query);
    console.table(req.ip);
    console.table(req.body);
    console.log(`${(typeof metadata)} is ${metadata}`);
    console.log(`${(typeof location)} is ${location}`);

    res.send({location, metadata});

});

router.get('/current', (req: Request, res: Response)=>{
    res.send({"running": true, "gears": 1233});

});

router.get('/forecast', async (req: Request, res: Response, next: NextFunction)=>{
    res.send({"running": true, "gears": 1233});

});

export default router;