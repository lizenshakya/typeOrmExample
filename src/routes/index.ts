import { Request, Response, Router } from 'express';

const router = Router();

router.post("/users", async(req: Request, res: Response) => {
    console.log({body: req.body, header: req.query}, "??????????????????????????")
    console.log("hello from here")
    res.status(200);
    res.send('Hello from the world World');
})

export default router;