import express from "express";
import { addBlog } from "../controllers/blogController";
import auth from "../middleware/auth";
import upload from "../middleware/multer";

const blogRouter = express.Router();

blogRouter.post("/add",upload.single("image"),auth, addBlog)

export default blogRouter;