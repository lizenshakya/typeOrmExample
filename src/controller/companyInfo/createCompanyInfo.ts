import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { CompanyInfo } from '../../entity/CompanyInfo';
import { createSuccessMessage } from '../../utils/customSucess'

export const createCompanyInfo = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, image, subTags, companyUserName } = req.body;
    const companyInfoRepository = getRepository(CompanyInfo);
    try {
        const results = await companyInfoRepository.save({
            name, description, image, subTags, companyUserName
        });
        return createSuccessMessage(200, 'Saved Successfully', '', res);

    } catch (err) {
      return next(err);
    }
};
