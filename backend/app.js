// app.js
const express = require('express');
const mongoose = require('mongoose');
const mainRoutes = require('./routes/mainRoutes');
const sampleController = require('./controllers/sampleController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/college_app_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Sample route connected to controller
app.get('/sample', sampleController.getSampleData);

// Main routes
app.use('/api', mainRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
