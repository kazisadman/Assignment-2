import mongoose, { Schema } from "mongoose";
import { Product } from "./product.interface";

const variantsSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: false, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price:{type:Number},
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: [variantsSchema],
  inventory: inventorySchema,
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
