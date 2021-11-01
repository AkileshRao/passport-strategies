const express = require('express');
const app = express();

app.use(cors());

app.post('/login', (req, res) => {
    console.log('Login post request');
})

app.listen(5000, () => console.log("Listening to port 5000"));