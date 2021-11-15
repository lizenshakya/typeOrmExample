import { Response } from 'express';

export const createSuccessMessage = (httpStatus: number, message: string, data: any = null, res: Response) => {
    return res.status(httpStatus).json({ message, data});
}