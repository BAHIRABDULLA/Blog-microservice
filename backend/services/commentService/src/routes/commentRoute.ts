// createComment(), getCommentsByPost(), editComment(), deleteComment()

import { Router } from "express";

const router = Router()

import createComment from "../controllers/createComment";
import editComment from "../controllers/editComment";
import deleteComment from "../controllers/deleteComment";

router.post('/createComment',createComment)
router.post('/editComment/:id',editComment)
router.delete('/deleteComment/:id',deleteComment)


export default router