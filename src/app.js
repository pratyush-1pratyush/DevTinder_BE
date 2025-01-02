const express = require("express")

const app = express();

/*app.use("/user",(req,res) => {
    res.send("user is")
})*/

app.get("/user",(req,res) => {
    res.send({"name":"pratyush"})
})

app.post("/user",(req,res) => {
    res.send("data succesfully saved to db")
})

app.patch("/user",(req,res) => {
    res.send("data succesfully updated")
})

app.delete("/user",(req,res) => {
    res.send("data deleted succesfully")
})

/*app.use("/test",(req,res) => {
    res.send("Hi this is user")
    console.log("hi")
})*/


/*app.use("/profile",(req,res) => {
    res.send("Hi this is profile")
   
})*/


/*app.use("/",(req,res) => {
    res.send("Hi this is the home of server 3001")
   
})*/

app.use("/multipleRotes",(req,res,next) => {
    console.log("rh1");
    //res.send("rh1 response")
    next();
},(req,res,next) => {
    console.log("rh 2")
    //res.send("rh2 response")
    next();
},[(req,res,next) => {
    console.log("rh 3")
    //res.send("rh3 response")
   next();
},(req,res,next) => {
    console.log("rh 4");
    //res.send("rh4 response")
    next();
}],[(req,res,next) => {
    console.log("rh 5");
    //res.send("rh5 response")
    
}])



app.listen(3001,() => {
    console.log("Server up and running at 3001....")
})