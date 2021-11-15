import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { CompanyInfo } from '../../entity/CompanyInfo';
import { createSuccessMessage } from '../../utils/customSucess'

export const getCompanyInfo = async (req: Request, res: Response, next: NextFunction) => {
    const { companyusername } = req.query;
    const companyInfoRepository = getRepository(CompanyInfo);
    try {
        const results = await companyInfoRepository.findOne({
            where: { companyUserName: companyusername }
        });
        return createSuccessMessage(200, '', results, res);
        //res.status(200).json({ message: results })
    } catch (err) {
      return next(err);
    }
};
