import express from 'express';
import { banner, deletebanner, getAllBanner, updateBanner } from '../Controllers/BannerController.js';

const router = express.Router();

router.post('/create', banner);
router.get('/getbanners', getAllBanner);
router.put('/:id',updateBanner );/* Add your edit banner controller here */
router.delete('/:id',deletebanner );/* Add your edit banner controller here */

export default router;
