import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${db_uri}`);
    console.log("connection to db successful");
  } catch (error) {
    console.error("connection to db failed", error);
  }
};

export { connectDB };
