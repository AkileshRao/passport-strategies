const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.post('/register', (req, res) => {
    console.log('Register post request');
})

app.post('/login', (req, res) => {
    console.log('Login post request');
})

app.listen(5000, () => console.log("Listening to port 5000"));