import mongoose from 'mongoose';

export const connectToDatabase = async MONGODB => {
  try {
    await mongoose.connect(MONGODB);
    console.log(`Connection to MongoDB: successful`);
  } catch (error) {
    console.log(`Connection to MongoDB: failed`, error);
  }
};
