import express from 'express';
const router = express.Router();
import commentController from '../../../controllers/commentController.js';

router.get('/', commentController.getComments);

export default router;