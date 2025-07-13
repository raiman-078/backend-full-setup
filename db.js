import mongoose from "mongoose";
import colors from "colors";
colors.enable();

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL);
      console.log(`Connected to MongoDB database ${conn.connection.host}`.bgRed.white);  
    } catch (error) {
      console.log('Error in MongoDB ${error}'.bgRed.white);
      process.exit(1); // exit th process with failure  
    }
};

export default connectDB;
