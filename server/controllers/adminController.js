import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

import dotenv from "dotenv";
dotenv.config();

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
console.log("Request Email:", email);
console.log("Request Password:", password);
console.log("Env Email:", process.env.ADMIN_EMAIL);
console.log("Env Password:", process.env.ADMIN_PASSWORD);


    if (
        email.trim() !== process.env.ADMIN_EMAIL.trim() ||
         password.trim() !== process.env.ADMIN_PASSWORD.trim()
        ) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({
      success: true,
      blogs
    });
    
  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });
  }}
  export const getAllComments = async (req, res) => {
    try {
      const comments = await Comment.find({}).populate("blog").sort({ createdAt: -1 });
      res.json({
        success: true,
        comments
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message
      });
    }
  };
      export const getDashboard= async (req, res) => {
        try {
          const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
          const blogs=await Blog.countDocuments({});
          const comments = await Comment.countDocuments({});
          const drafts=await Blog.countDocuments({ isPublished: false });
          const dashboardData = {
            recentBlogs,
            blogs,
            comments,
            drafts
          };
          res.json({
            success: true,
            data: dashboardData
          })
        } catch (error) {
          res.json({
            success: false,
            message: error.message
          });
          
        }
    };
    export const deleteCommentById = async (req, res) => {
      try {
        const { id } = req.body;
        await Comment.findByIdAndDelete(id);
        res.json({ success: true, message: "Comment deleted successfully" }); 

      } catch (error) {
        res.json({
          success: false,
          message: error.message
        });
        
      }}
          export const approveCommentById = async (req, res) => {
      try {
        const { id } = req.body;
        await Comment.findByIdAndUpdate(id, { isApproved: true });
        res.json({ success: true, message: "Comment approved successfully" });

      } catch (error) {
        res.json({
          success: false,
          message: error.message
        });

      }
    }
