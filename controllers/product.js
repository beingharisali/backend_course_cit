const getProducts = (req, res)=>{
    try {
        res.status(200).json({
            success:true,
            msg:"Getting all the products"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Internal Server Error",
            error
        })
    }
}
const createProduct = (req, res)=>{
     try {
        res.status(201).json({
            success:true,
            msg:"Created Product"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Internal Server Error",
            error
        })
    }
}
const updateProduct = (req, res)=>{
     try {
        res.status(200).json({
            success:true,
            msg:"Updated Product"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Internal Server Error",
            error
        })
    }
}
const deleteProduct = (req, res)=>{
     try {
        res.status(200).json({
            success:true,
            msg:"Deleted Product"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Internal Server Error",
            error
        })
    }
}
module.exports = {getProducts, createProduct, updateProduct, deleteProduct}