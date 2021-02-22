const express = require("express");
const app = express();


function hand(req, res) {
    var today = new Date();
    res.send(`current time is ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
}
app.get("/time", hand);


app.listen(1337, () => {
    console.log("server is runing on port 1337");
})