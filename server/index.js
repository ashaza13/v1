const express = require('express')

// const path = require('path')

const app = express()

// app.use(express.static(path.join(__dirname + "/public")))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
});

app.listen(PORT)