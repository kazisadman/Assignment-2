import { getProductByIdDb } from '../product/product.service';
import Order from './order.interface';
import orderModel from './order.model';

const createOrderInDb = async (order: Partial<Order>) => {
  const result = await orderModel.create(order);
  return result;
};

const isInStock = async (
  productId: string,
  orderQuantity: number
): Promise<boolean> => {
  const product = await getProductByIdDb(productId);

  const inventory: number = product?.inventory?.quantity ?? 0;

  return inventory >= orderQuantity;
};

const getAllorderDb = async () => {
  const result = await orderModel.find().select('-_id -__v ');
  return result;
};

const queryorderDb = async (query: any) => {
  console.log(query);
  const result = await orderModel
    .find({ $text: { $search: query } })
    .select('-_id -__v ');
  return result;
};

export { createOrderInDb, getAllorderDb, queryorderDb, isInStock };
