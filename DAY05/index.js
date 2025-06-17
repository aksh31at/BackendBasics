const express = require('express');
const app=express();

app.use(express.json());

const Bookstore=[
    {id:1, name:"Harry Potter", author:"JK Rowling"},
    {id:2, name:"The Hobbit", author:"JRR Tolkien"},
    {id:3, name:"1984", author:"George Orwell"},
    {id:4, name:"To Kill a Mockingbird", author:"Harper Lee"},
]


app.get("/book", (req,res)=>{
    res.send(Bookstore);
})

app.get("/book/:id", (req, res) => {
    const id= parseInt(req.params.id);
    const Book= Bookstore.find(info=> info.id === id);
    res.send(Book);
})

app.post("/book", (req, res) => {
    Bookstore.push(req.body);
    res.send("Book added successfully");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});









// app.use("/user", (req, res) => {
//     console.log(req.query);
//     res.send("You are on User Page");
// });


// //parsing
// app.use(express.json());
// //middleware to parse JSON bodies->JS objects

// app.get("/user", (req, res) => {
//     res.send({name: "John", age: 30});
// })

// app.post("/user", (req, res) => {
//     console.log(typeof req.body.age);
//     res.send("User data received");
// });

