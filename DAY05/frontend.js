fetch("http://localhost:3000/api/hello")

const response= await fetch("http://localhost:3000/api/hello", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "John Doe",
        age: 30 
    }) 
});