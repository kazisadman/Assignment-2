import { Request, Response } from 'express';
import {
  createOrderInDb,
  getAllorderDb,
  isInStock,
  queryorderDb,
} from './order.service';
import { manageInventory } from '../product/product.service';
import orderModel from './order.model';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const productId = order?.productId;

    const orderQuantity = order?.quantity;

    const inStock = await isInStock(productId, orderQuantity);

    if (inStock) {

      const orderData = await createOrderInDb(order);

          const result = await orderModel
            .findById(orderData?._id)
            .select(
              '-_id -__v'
            );


      await manageInventory(productId, orderQuantity);

      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    } else {
      res.status(409).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.email;
    if (searchTerm) {
      const result = await queryorderDb(searchTerm);

      if (!result.length) {
        res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      }

      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user ${searchTerm}!`,
        data: result,
      });
    } else {
      const result = await getAllorderDb();

      if (!result.length) {
        res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      }

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { createOrder, getOrders };
