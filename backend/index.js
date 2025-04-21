const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const wishRoutes = require('./routes/wishRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();
const port = 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', wishRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
