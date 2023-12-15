

const getProducts = async (req,res)=>{
    res.status(200).json({msg: "this is for all products"})
}
const getProductsTesting = async (req,res)=>{
    res.status(200).json({msg: "this is for all products testing"})
}

module.exports={getProducts, getProductsTesting};