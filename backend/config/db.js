// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('your-mongodb-connection-string');
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error(error);
//     process.exit(1); // Exit the process if MongoDB connection fails
//   }
// };

// module.exports = connectDB;




// Import mongoose to interact with MongoDB
const mongoose = require('mongoose');

// Load environment variables from the .env file
require('dotenv').config();

const connectDB = async () => {
  try {
    // Use the connection string from the .env file
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
