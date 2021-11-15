import { Router } from 'express';

import { createCompanyInfo } from './createCompanyInfo';
import { getCompanyInfo } from './getCompanyInfo'

const router = Router();

router.get('/', getCompanyInfo);
router.post('/register', createCompanyInfo);

export default router;
