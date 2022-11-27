const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 5000

const app = express();



app.listen(port, () => 
           { console.log(`Server is running ${port}`)}
 )

