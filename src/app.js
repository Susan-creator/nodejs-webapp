const express = require('express');
const app = express();
const routes = require('./routes/index');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
