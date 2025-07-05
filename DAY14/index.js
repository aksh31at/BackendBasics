const express = require('express');
const app = express();
const main= require("./database");
const User = require("./users");

app.use(express.json());

app.get("/info", async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get("/user/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.send(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.post("/register", async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({message: "User created successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
})


main()
.then(async () =>{
    console.log("Connected to MongoDB")
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    })
})
.catch((err) => console.log(err));
