const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/login', (req, res) => {
    res.send("Login post")
})

app.post('/register', (req, res) => {
    res.send("Register post")
})

app.get('/logout', (req, res) => {
    res.send("Logout")
})

app.get('/protected', (req, res) => {
    res.send("Protected")
})


app.listen(5000, (req, res) => {
    console.log("Listening to port 5000");
})