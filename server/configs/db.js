import mongoose from "mongoose";

const connectDB = async () => {
<<<<<<< HEAD
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    await mongoose.connect(
      `${process.env.MONGODB_URI}/blogapp`
      // ,
      //          {
      //         useNewUrlParser: true,
      //         useUnifiedTopology: true,
      // }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
=======
    try {
        mongoose.connection.on("connected", () => console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/blogapp`
            // ,
    //          {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    // }
);
    } catch (error) {

        console.log(error.message);
        
    }
}

export default connectDB;
>>>>>>> 27775cbbe24bdbdc5b9f90ec725c730059323ca7
