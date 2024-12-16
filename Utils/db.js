import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const instance = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${instance.connection.host}`);
        console.log("database name", mongoose.connection.name)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;