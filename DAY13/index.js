const express = require('express');
const app = express();
const main= require("./database");
const User = require("./Models/users");

app.use(express.json());

app.get('/info', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});



main()
.then(async () =>{
    console.log("Connected to MongoDB")
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    })

    const result = await User.find({name:"Akshat"});
    console.log(result); // Find users older than 25
})
.catch((err) => console.log(err));
