import express from "express";
import { createOrder, getOrders } from "./order.controller";

const router = express.Router();

router.route("/").post(createOrder).get(getOrders);

export const orderRouter = router;
