import express from "express";
import * as todoController from "../app/controllers/todoControllers.js";

const router = express.Router();

//create
router.post("/store", todoController.store);

//read
router.get("/show", todoController.show);

// update
router.put("/update", todoController.update);

//delete
router.delete("/destroy", todoController.destroy);

export default router;
