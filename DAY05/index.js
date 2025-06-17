const express = require('express');
const app=express();

// app.use("/user", (req, res) => {
//     console.log(req.query);
//     res.send("You are on User Page");
// });


//parsing
app.use(express.json());
//middleware to parse JSON bodies->JS objects

app.get("/user", (req, res) => {
    res.send({name: "John", age: 30});
})

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("User data received");
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});