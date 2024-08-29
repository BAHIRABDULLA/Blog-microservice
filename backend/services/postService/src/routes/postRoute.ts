import { Router,Request,Response } from "express";



//createPost(), getPost(), updatePost(), deletePost(), getAllPosts()


const router = Router()
import { createPost } from "../controllers/createPost";
import { getPost } from "../controllers/getPost";


router.post('/createPost',createPost)
router.get('/getPost',getPost)
router.post('/updatePost',)

export default router