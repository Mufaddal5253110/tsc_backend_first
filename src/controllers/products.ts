import express from "express";
import * as product from "../db/products";

export const getAllProducts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const products = await product.getProducts();

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, description, images, quantity, price, category, user } = req.body;

    let prod = new product.ProductModel({
      name,
      description,
      images,
      quantity,
      price,
      category,
      user,
    });

    prod = await prod.save();

    return res.status(200).json(prod);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const prod = await product.getProductById(req.params.id);

    return res.status(200).json(prod);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const prod = await product.deleteProductById(req.params.id);
    return res.status(200).json(prod);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
