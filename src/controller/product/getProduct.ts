import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../../entity/Product';
import { createSuccessMessage } from '../../utils/customSucess'
import { paginationInfo } from '../../utils/paginationHelper'

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const productRepository = getRepository(Product);
    const pagination = paginationInfo(req);
    try {
        const results = await productRepository.findAndCount({
            ...pagination
        });
        return createSuccessMessage(200, '', results, res);
        //res.status(200).json({ message: results })
    } catch (err) {
      return next(err);
    }
};
