import express from "express";
import {
  createProduct,
  deleteProductById,
  getProducts,
  getProductById,
  updateProductById,
} from "./product.controller";

const router = express.Router();

router.route("/").post(createProduct).get(getProducts);

router
  .route("/:productId")
  .get(getProductById)
  .delete(deleteProductById)
  .put(updateProductById);

export const productRoutes = router;
