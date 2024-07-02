import { Request, Response } from 'express';
import {
  createProductDb,
  deleteProductByIdDb,
  getAllProductDb,
  getProductByIdDb,
  queryProductDb,
  updateProductByIdDb,
} from './product.service';
import {productUpadateValidationSchema, productValidationSchema} from './product.validation';
import productModel from './product.model';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const validatedData = productValidationSchema.parse(product);

    const productData = await createProductDb(validatedData);

    const result = await productModel
      .findById(productData?._id)
      .select('-_id -createdAt -updatedAt -__v -variants._id -inventory._id');

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const product: object = req.body;
    const { productId } = req.params;

    const validatedData = productUpadateValidationSchema.parse(product);

    const result = await updateProductByIdDb(validatedData, productId);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    if (searchTerm) {
      const result = await queryProductDb(searchTerm);

      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully!`,
        data: result,
      });
    } else {
      const result = await getAllProductDb();

      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await getProductByIdDb(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await deleteProductByIdDb(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  createProduct,
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
};
