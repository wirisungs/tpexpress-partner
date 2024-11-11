// Import the framework and lib
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './config/mongo.db.config.js';

//Import the routes
import authRoutes from './routes/auth.route.js';
import partnerRoutes from './routes/partner.route.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
db();

// Create the Express app
const app = express();

app.route('/').get((req, res) => {
  res.send('Hello, world!');
}
);

// Use the body-parser middleware
app.use(bodyParser.json());

// Use the routes
app.use('/auth', authRoutes);
app.use('/partners', partnerRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Up and Running! TPExpress Partner Server is running on port ${process.env.PORT}`);
});
