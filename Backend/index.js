const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;
const goalRoutes = require('./routes/goalRoutes')

connectDB();

const app = express();

//to uses req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// to use routes
app.use('/api/goals', goalRoutes);

// to use error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
