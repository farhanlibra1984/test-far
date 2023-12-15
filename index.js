const express = require("express");
const  cors = require("cors");
const app=express();
const Product_Routes = require("./routes/products");
const { default: mongoose } = require("mongoose");

// app.use("/products", Product_Routes);
app.use(cors());

// app.get("/", (req, res)=>{
//     res.send("it would be for home")
// })

const connectDb = ()=>{
    
    return mongoose.connect("mongodb+srv://ali:asdf12@ahmed1.gczlkco.mongodb.net/kfc");
    
    
    
}

connectDb().then(()=>{
    console.log("connected to db");
})
const productSchema = new  mongoose.Schema({
    productName:String,
    price:Number,
    color:String
})

const Product = mongoose.model("Product",productSchema);

app.get("/products", async(req, res)=>{
    const products = await Product.find();
    res.status(200).json(products);
    

})
app.listen(3000, "localhost", ()=>{
    console.log("server is running")
})