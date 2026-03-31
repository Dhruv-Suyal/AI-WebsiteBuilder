const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./utils/dbConnection');

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Kya haal hai mitrrr');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});