const express = require('express');
const app=express();

app.use("/user", (req, res, next) => {
    console.log("hi");
    next();                  //<------------------MIDDLEWARE
    
});
app.use("/user", (req, res, prev) => {
    prev();
    res.send("Hello I am second");
});                         //<------------------REQUEST HANDLER







app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
