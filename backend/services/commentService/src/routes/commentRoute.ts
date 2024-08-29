// createComment(), getCommentsByPost(), updateComment(), deleteComment()

import { Router } from "express";

const router = Router()

import createComment from "../controllers/createComment";

router.post('/createComment',createComment)

export default router