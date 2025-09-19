require('dotenv').config()
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 3000;
const cors =require('cors');
const app = express();

app.use(cors());
app.use(express.json());
// database connection here

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mcbondo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, 
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const booksCollection = client.db("bookDB").collection("books");

    // Add books related API
    app.post("/books", async(req,res) =>{
        const newBook = req.body;
        newBook.quantity = parseInt(newBook.quantity);
        const result = await booksCollection.insertOne(newBook);
        res.send(newBook);
    })

    // available book API
    app.get("/available-books", async (req, res) => {
    const result = await booksCollection.find({ quantity: { $gt: 0 } }).toArray();
    res.send(result);
    });



    // get api

    app.get("/books", async (req,res) =>{
        const result = await booksCollection.find().toArray();
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir);


app.get("/", (req,res) =>{
    res.send("server homepage");
})

app.get("/about", (req,res) =>{
    res.send("server about page");
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})