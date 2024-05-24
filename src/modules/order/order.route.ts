import express from "express";
import { createOrder } from "./order.controller";

const router = express.Router();

router.route("/").post(createOrder);

export const orderRouter = router;
