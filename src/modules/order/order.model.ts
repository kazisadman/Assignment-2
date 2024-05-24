import mongoose, { Schema } from "mongoose";
import Order from "./order.interface";

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
