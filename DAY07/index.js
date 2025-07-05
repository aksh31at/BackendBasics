const express= require('express');
const app = express();
app.use(express.json());

//CRUD: Create Read Update Delete

const foodmenu= [
    { id: 1, name: 'Pizza', category:"veg", price: 100 },
    { id: 2, name: 'Burger', category:"non-veg", price: 500 },
    { id: 3, name: 'Pasta', category:"veg", price: 800 },
    { id: 4, name: 'Salad', category:"veg", price: 600},
    { id: 5, name: 'Steak', category:"non-veg", price: 1500 },
    { id: 6, name: 'Sushi', category:"non-veg", price: 1200 },
    { id: 7, name: 'Tacos', category:"non-veg", price: 700 },
    { id: 8, name: 'Ice Cream', category:"veg", price: 400 },
    { id: 9, name: 'Brownie', category:"veg", price: 500 },
    { id: 10, name: 'Fries', category:"veg", price: 300 },
    { id: 11, name: 'Nachos', category:"veg", price: 400 },
    { id: 12, name: 'Soup', category:"non-veg", price: 600 }, 
    { id: 13, name: 'Spring Rolls', category:"veg", price: 600 },
    { id: 14, name: 'Curry', category:"non-veg", price: 100},
    { id: 15, name: 'Rice', category:"veg", price: 400 },
    { id: 16, name: 'Noodles', category:"non-veg", price: 700 },
    { id: 17, name: 'Sandwich', category:"non-veg", price: 500 },
    { id: 18, name: 'Dumplings', category:"non-veg", price: 800 },
    { id: 19, name: 'Quiche', category:"veg", price: 600 },
    { id: 20, name: 'Pancakes', category:"veg", price: 500 }
]

const AddToCart=[]

app.get('/foodmenu', (req, res) => {
    res.json(foodmenu);
});
app.post("/admin", (req, res) => {
    // Add a new food item to the menu
    // Authenticate the user as admin
    const token = "Abcdef";
    const accessToken = req.headers['authorization'];

    if (accessToken !== token) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    const { name, category, price } = req.body;
    if (!name || !category || !price) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newId = foodmenu.length > 0 ? foodmenu[foodmenu.length - 1].id + 1 : 1;
    const newFoodItem = { id: newId, name, category, price };
    foodmenu.push(newFoodItem);

    res.status(201).json({ message: 'Food item added', food: newFoodItem });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});