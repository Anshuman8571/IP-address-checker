const express = require('express');
const ip = require('ip');
const app = express();

app.get("/ping",(req,res) => {
    const serverIP = ip.address();
    return res.json({
        ping:'pong',
        message:"Working",
        ServerIP:serverIP
    })
})
app.listen(3000,() => {
    console.log("Server is running");
})