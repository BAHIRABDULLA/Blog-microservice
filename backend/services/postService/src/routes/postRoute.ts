import { Router,Request,Response } from "express";



//createPost(), getPost(), updatePost(), deletePost(), getAllPosts()


const router = Router()
import { createPost } from "../controllers/createPost";
import { getPost } from "../controllers/getPost";
import { getAllPosts } from "../controllers/getAllPosts";
import { updatePost } from "../controllers/updatePost";

router.post('/createPost',createPost)
router.get('/getAllPost',getAllPosts)
router.get('/getPost/:id',getPost)
router.post('/updatePost',updatePost)

export default router