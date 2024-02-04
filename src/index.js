const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');

const app = express();

// Configure middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Listen on port 
app.listen(PORT, () =>{
    console.log(`Server started running on port ${PORT}`);
});