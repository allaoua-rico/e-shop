import mongoose from 'mongoose';
import nextConnect from 'next-connect';

// Get your connection string from .env.local

const MONGODB_CONN_STR = process.env.DATABASE_URL;

export const databaseMiddleware = async (req, res, next) => {

  try {

    if (!global.mongoose) {

      global.mongoose = await mongoose.connect(MONGODB_CONN_STR, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });

    }

  }
  catch (ex) {
    console.error(ex);
  }

  // You could extend the NextRequest interface 
  // with the mongoose instance as well if you wish.
  // req.mongoose = global.mongoose;

  return next();

};

  
export default function createHandler(...middleware) {

    return  nextConnect().use(databaseMiddleware, ...middleware);
  
  }