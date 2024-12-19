import mongoose from "mongoose";

const connectDB = async () => {
    let delay = 5000; // Initial delay 5 seconds
    while (true) { // Infinite loop to keep retrying until successful
        try {
            const connection = await mongoose.connect(process.env.MONGO_URI);
            console.log("Connected to MongoDB:", connection.connection.host);
            return; // Successfully connected, exit the loop
        } catch (error) {
            console.log("MongoDB connection failed. Retrying...", error);
            // Exponential backoff - double the delay after each failure
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2; // Increase delay after each retry
        }
    }
};
export default connectDB;