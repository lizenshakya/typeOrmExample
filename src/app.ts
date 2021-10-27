import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import {createConnection} from "typeorm";
import * as dotenv from "dotenv";
import cors from 'cors';
import { uuid } from 'uuidv4';
dotenv.config({ path: __dirname+'/config/.env' });
console.log(__dirname, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    req.debugId = uuid();
    req.ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
    req.device = req.header("user-agent") || "";
    next()
 });
 

createConnection().then(async => {
    console.log("Database Connected Successfully")
}).catch(error => console.log(error));

export default app;