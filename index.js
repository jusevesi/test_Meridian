require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/index.js');
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);


app.listen(port, () => {
    console.log(`Sever Online In Port: ${port}`)
})