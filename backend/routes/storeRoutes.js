import express from "express";
import { getAllStore,createStore } from "../controller/Store.controller.js";

const router = express.Router();

router.get("/allStore" ,getAllStore);
router.post("/store",createStore);


export default router;
