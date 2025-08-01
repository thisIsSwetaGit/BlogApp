import express from "express";
import "dotenv/config";
// import mongoose from "mongoose";
import cors from "cors";
// import { connect } from "mongoose";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
<<<<<<< HEAD
import dotenv from "dotenv";
dotenv.config();

=======
>>>>>>> 27775cbbe24bdbdc5b9f90ec725c730059323ca7

const app = express();

await connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/admin", adminRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
