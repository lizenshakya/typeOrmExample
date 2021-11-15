import { Router } from 'express';

import { createProduct } from './createProduct';
import { getProducts } from './getProduct'

const router = Router();

router.get('/', getProducts);
router.post('/register', createProduct);

export default router;
