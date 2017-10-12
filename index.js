const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.post('/person', (req, res) => {
    const data = req.body;

    console.log("This is the person, ", data);
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
})