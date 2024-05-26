const express = require('express');
const path = require('path');

const app  = express();
const PORT = process.env.PORT || 80;

// app.get('/' , (req,res)=>{
//     res.send(`A simple node js applicion running on EC2 VM.`);
// });
app.get('/contact' , (req,res)=>{
    res.send(`please contact Kumar Programming @kyprogramming`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// app.post('/github-webhook' , (req,res)=>{
//     res.send(`webhook successfully returned.`);
// });



app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`);
})