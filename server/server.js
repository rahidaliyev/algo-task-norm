const express = require('express');
const app = express();

let cors = require("cors");
app.use(cors());
app.listen(5000, () => {

    console.log("our page on localhost:5000")
})

const demoproducts = [

    { "id": 1, "name": "sugar", "quantity": 30, "price": 30 },
    { "id": 2, "name": "tea", "quantity": 31, "price": 20 },
    { "id": 3, "name": "oil", "quantity": 32, "price": 20 },
    { "id": 4, "name": "bread", "quantity": 33, "price": 20 },
    { "id": 5, "name": "pen", "quantity": 34, "price": 20 },
    { "id": 6, "name": "apple", "quantity": 35, "price": 20 },
    { "id": 7, "name": "lemon", "quantity": 36, "price": 20 },
    { "id": 8, "name": "macaroni", "quantity": 37, "price": 20 },
    { "id": 9, "name": "tomato", "quantity": 38, "price": 20 },
    { "id": 11, "name": "cucumber", "quantity": 39, "price": 20 },
    { "id": 12, "name": "zomato", "quantity": 39, "price": 20 },
    { "id": 13, "name": "watermalon", "quantity": 39, "price": 20 },
    { "id": 14, "name": "onion", "quantity": 3, "price": 20 }
]




 app.get("/api", function (req, res) {

    res.status(200).send(demoproducts)
})

app.get("/list/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    let myproduct=demoproducts.find((e)=>(e.id==id));
    if(myproduct){
        res.status(200).json(myproduct);
    }
    
    res.status(400).json("bele sohbet yoxdur!")
})