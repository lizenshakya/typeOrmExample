import { Router } from 'express';

import companyInfo from '../controller/companyInfo';
import product from '../controller/product';

const router = Router();

router.use('/companyInfo', companyInfo);
router.use('/product', product);

export default router;
