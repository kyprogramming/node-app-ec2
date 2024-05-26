const express = require('express');

const app  = express();

app.get('/' , (req,res)=>{
    res.send(`A simple node js applicion running on EC2 VM.`);
});
app.get('/contact' , (req,res)=>{
    res.send(`please contact Kumar Programming @kyprogramming`);
});

app.post('/webhook' , (req,res)=>{
    res.send(`please contact Kumar Programming @kyprogramming`);
});
const PORT = process.env.PORT || 80;

app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`);
})