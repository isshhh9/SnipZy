import mongoose from "mongoose";
// ! 
const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

//TYPESCRIPT
// This is to ensure that the connection is not established multiple times in development mode
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    //if connection is already established, return the cached connection
  if (cached.conn) {
    return cached.conn;
  }
  //if connection is not established, create a new connection
  if (!cached.promise) {
    const opts = {
        //stores frequently accessed data in memory for faster retrieval
      bufferCommands: true,
      //number of conections that can happen at the same time in mongodb
      maxPoolSize: 10,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(() => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
