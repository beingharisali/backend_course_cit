const productModel = require("../models/Product");
const getProducts =async (req, res) => {
  try {
    const data = await productModel.find({})
    res.status(200).json({
      success: true,
      msg: "Getting all the products",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};
const getSingleProduct =async (req, res) => {
  try {
    const id = req.params.id
    const data = await productModel.findById(id)
    res.status(200).json({
      success: true,
      msg: "Getting all the products",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, description, price, rating, review, image } = req.body;
    const product = await productModel.create({
      title,
      description,
      price,
      rating,
      review,
      image,
    });
    res.status(201).json({
      success: true,
      msg: "Created Product",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};
const updateProduct =async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body;
    const data = await productModel.findByIdAndUpdate(id, body, {new:true})
    res.status(200).json({
      success: true,
      msg: "Updated Product",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};
const deleteProduct =async (req, res) => {
  try {
    const id = req.params.id
    const data = await productModel.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      msg: "Product deleted successfully",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error,
    });
  }
};
module.exports = { getProducts, createProduct, updateProduct, deleteProduct, getSingleProduct };
