import { Product } from "./product.interface";
import productModel from "./product.model";

const createProductDb = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

const updateProductByIdDb = async (product: object, productId: string) => {
  const result = await productModel.findByIdAndUpdate(productId, product, {
    new: true,
  });
  return result;
};

const getAllProductDb = async () => {
  const result = await productModel.find();
  return result;
};

const getProductByIdDb = async (productId: string) => {
  const result = productModel.findById(productId);
  return result;
};

const deleteProductByIdDb = async (productId: string) => {
  const result = productModel.findByIdAndDelete(productId);
  return result;
};

const queryProductDb = async (query: any) => {
  const result = await productModel.find({ $text: { $search: query } });
  return result;
};

export {
  createProductDb,
  getAllProductDb,
  getProductByIdDb,
  deleteProductByIdDb,
  updateProductByIdDb,
  queryProductDb,
};
