import mongoose from "mongoose";

import { MONGODB_URI, NODE_ENV } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.<production/development>.local file"
  );
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB Connected in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error connecting to DB: ", error);
    process.exit(1);
  }
};
