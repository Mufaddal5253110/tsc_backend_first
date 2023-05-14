import express from "express";

import { getProduct, getAllProducts, addProduct, deleteProduct } from "../controllers/products";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/products", isAuthenticated, getAllProducts);
  router.get("/product/:id", isAuthenticated, getProduct);
  router.post("/product", isAuthenticated, addProduct);
  router.delete("/product/:id", isAuthenticated, isOwner, deleteProduct);
};
