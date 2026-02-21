const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const authRoute = require('../routes/auth.routes.js');

const app = express();
const PORT = process.env.PORT;

app.use('/api/auth', authRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.use((_, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});