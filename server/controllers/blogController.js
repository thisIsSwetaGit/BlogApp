import fs from "fs";
import imagekit from "../configs/imagekit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, image, isPublished } =
      JSON.parse(req.body.blog);
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" });
    }
    const fileBuffer = fs.readFileSync(imageFile.path);

    // upload image to ImageKit
    const reponse = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });
    // optimization through ImageKit URL path transformation
    const optimizedImageUrl = imagekit.url({
      path: reponse.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ]
    });
    const imageUrl = optimizedImageUrl;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: imageUrl,
      isPublished,
    })
    res.json({
      success: true,message: "Blog added successfully"})
  } catch (error) {
     res.json({
      success: false,message: "error.message"})
  }
};
