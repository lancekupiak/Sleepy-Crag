const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.post('/', (req,res) => {
    res.send('Hello there!');
    res.end;
});


app.listen(process.env.PORT || 80, ()=> {
    console.log('Server running...');
});