const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.post('/', (req,res) => {
    console.log(req.body);
    res.send(req.body);
    res.end;
});


app.listen(process.env.PORT || 4000, ()=> {
    console.log('Server running...');
});