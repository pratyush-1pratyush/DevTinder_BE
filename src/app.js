const express = require("express")

const app = express();

app.use("/test",(req,res) => {
    res.send("Hi this is user")
    console.log("hi")
})

app.use("/profile",(req,res) => {
    res.send("Hi this is profile")
   
})


app.use("/",(req,res) => {
    res.send("Hi this is the home of server 3001")
   
})



app.listen(3001,() => {
    console.log("Server up and running at 3001....")
})