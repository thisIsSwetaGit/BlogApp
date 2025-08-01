<<<<<<< HEAD
import jwt from "jsonwebtoken";
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
=======
import JsonWebToken from "jsonwebtoken";
import dotenv from "dotenv";




export const adminLogin = async (req, res) => {
   try {
    const {email, password} = req.body;
    if (email !== process.env.ADMIN_EMAIL && password !== process.env.ADMIN_PASSWORD) {
        return res.json({success: false, message: "Invalid credentials"});
    }
    const token=jwt.sign({email}, process.env.JWT_SECRET)
    res.json({
        success: true,token});

   } catch (error) {
    res.json({
        success: false,
        message: "Internal server error"
    });
   }
>>>>>>> 27775cbbe24bdbdc5b9f90ec725c730059323ca7
};