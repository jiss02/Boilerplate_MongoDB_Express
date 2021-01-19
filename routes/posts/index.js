import express from 'express';
const router = express.Router();
import commentRouter from './comments/index.js';

router.use('/:postId/comments', commentRouter);

export default router;