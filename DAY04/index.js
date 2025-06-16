// ? char become Optional
// + char can be repeated multiple times
// * any number of characters can arrive
const express=require("express");

const app=express();

app.use("/about/:id/:user", (req, res)=>{
    console.log(req.params);
    // req.params is an object that contains route parameters
    res.send("You are on about page");
})

app.use("/contact", (req, res)=>{
    res.send("You are on contact page");
})

app.use("/", (req, res)=>{
    res.send("You are on home page");
})

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
});

