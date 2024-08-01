const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const applicationRoutes = require('./routes/applicationRoutes'); // Adjust path if needed

const app = express();
const port = process.env.PORT || 3002;

// Use CORS middleware
app.use(cors());

// Middleware for parsing JSON
app.use(bodyParser.json());

// Use routes
app.use('/api', applicationRoutes);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
