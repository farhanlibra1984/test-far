const { default: mongoose } = require("mongoose");

const productSchema = new  mongoose.Schema({
    price:Number,
    color:String
})
module.exports=mongoose.model("Product",productSchema);
