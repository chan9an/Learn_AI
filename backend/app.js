const express = require('express')
const app = express()
const port = 3000

app.get('/yo', (req, res) => {
  res.send('Yooo Blud')
})

app.listen(3000,()=>{
    console.log("chal rha hai")
});

