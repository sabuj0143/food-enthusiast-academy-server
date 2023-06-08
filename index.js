const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// nW7pMR686t1joSlL
// foodUser

// routes
app.get('/', (req, res) => {
    res.send('Food Enthusiast Academy Running')
})
app.listen(port, () => {
    console.log(`Food Enthusiast Academy is listening on PORT:  ${port}`);
})