import express from 'express';
const router = express.Router();
import {addFood,getCategoryFood,getSubCategoryFood,getSpecificFood,likeFood,commentFood} from "../controllers/foodController.js";

router.post('/add-food',addFood);
router.get('/:category',getCategoryFood);
router.get('/:category/:subCategory',getSubCategoryFood);
router.get('/:id',getSpecificFood);
router.patch('/:id/like',likeFood); // ??????
router.patch('/:id/comment',commentFood); 

export default router;