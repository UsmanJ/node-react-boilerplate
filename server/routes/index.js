import express from 'express';
import tariff from './tariff';

const router = express.Router();

router.use('/tariffs', tariff);

export default router;
