import { Router, Request, Response, NextFunction } from "express";
const router = Router();

// API V2 INTEGRATION

router.get('/', (req: Request, res: Response)=>{
    res.send({"information": "API V2"});
});

router.get('/location', (req: Request, res: Response)=>{
    res.send({"information": "API V2"});
});

router.get('/current', (req: Request, res: Response)=>{
    res.send({"information": "API V2"});
});

router.get('/forecast', async (req: Request, res: Response, next: NextFunction)=>{
    res.send({"information": "API V2"});
});

export default router;