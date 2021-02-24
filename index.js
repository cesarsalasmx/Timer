const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const apiRouter = require('./routes/api');
const app = express();

//Route
apiRouter(app);

const server =  app.listen(PORT,function(){
    console.log(`Listening form: http://localhost:${PORT}`);
});