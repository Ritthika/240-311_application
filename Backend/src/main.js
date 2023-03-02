const express = require('express');
const app = express();

const port = process.env.port || 6969;
app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`);
});

app.get('/',(req, res) => {
    res.send("hello world");
})


