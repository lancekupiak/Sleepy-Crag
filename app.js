const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res) => {
    res.send('Hello World');
    res.end;
});

app.listen(process.env.PORT || 4000, ()=> {
    console.log('Server running...');
});