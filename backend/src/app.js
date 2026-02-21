require('dotenv').config();
const express = require('express');
const app = express();
const PORT  = process.env.PORT;
const authRoute = require('../routes/auth.routes.js');

app.use('/api/auth',authRoute);


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})