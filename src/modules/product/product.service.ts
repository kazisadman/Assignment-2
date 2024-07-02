import { Product } from './product.interface';
import productModel from './product.model';

const createProductDb = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

const updateProductByIdDb = async (
  product: Partial<Product>,
  productId: string
) => {
  const result = await productModel
    .findByIdAndUpdate(productId, product, {
      new: true,
    })
    .select('-_id -createdAt -updatedAt -__v -variants._id -inventory._id');
  return result;
};

const manageInventory = async (productId: string, orderQuantity: number) => {
  const product = await productModel.findById(productId);

  product?.inventory.quantity -= orderQuantity;

  if (product?.inventory.quantity === 0) {
    product?.inventory.isStock = false;
  } else {
    product?.inventory.isStock = true;
  }

  return await product?.save();
};

const getAllProductDb = async () => {
  const result = await productModel
    .find()
    .select('-_id -createdAt -updatedAt -__v -variants._id -inventory._id');
  return result;
};

const getProductByIdDb = async (productId: string) => {
  const result = productModel
    .findById(productId)
    .select('-_id -createdAt -updatedAt -__v -variants._id -inventory._id');
  return result;
};

const deleteProductByIdDb = async (productId: string) => {
  const result = productModel.findByIdAndDelete(productId);
  return result;
};

const queryProductDb = async (query: any) => {
  const result = await productModel
    .find({ $text: { $search: query } })
    .select('-_id -createdAt -updatedAt -__v -variants._id -inventory._id');
;
  return result;
};

export {
  createProductDb,
  getAllProductDb,
  getProductByIdDb,
  deleteProductByIdDb,
  updateProductByIdDb,
  queryProductDb,
  manageInventory,
};
