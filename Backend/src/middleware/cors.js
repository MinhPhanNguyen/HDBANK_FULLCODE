const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', // Allow frontend on port 5173
  methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
  allowedHeaders: 'Content-Type,Authorization',  // Allowed headers
};

module.exports = cors(corsOptions);
