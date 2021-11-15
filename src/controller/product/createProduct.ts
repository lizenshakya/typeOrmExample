import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../../entity/Product';
import { createSuccessMessage } from '../../utils/customSucess'

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, image, price } = req.body;
    const productInfoRepository = getRepository(Product);
    try {
        const results = await productInfoRepository.save({
            name, description, image, price
        });
        return createSuccessMessage(200, 'Saved Successfully', '', res);

    } catch (err) {
      return next(err);
    }
};
