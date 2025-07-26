const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config(); // Load environment variables
const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();

// Example Route
app.get('/', (req, res) => {
  res.send('🚀 MediReminder backend running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
const reminderRoutes = require("./routes/reminderRoutes");
app.use("/api/reminders", reminderRoutes);
