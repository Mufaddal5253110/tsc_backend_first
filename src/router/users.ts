import express from "express";

import { getAllUsers, deleteUser, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.put("/users/:id", isAuthenticated, isOwner, updateUser);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
};
