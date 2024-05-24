import { Request, Response } from "express";
import { createOrderInDb, getAllorderDb, queryorderDb } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await createOrderInDb(order);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.email;
    if (searchTerm) {
      const result = await queryorderDb(searchTerm);

      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user ${searchTerm}!`,
        data: result,
      });
    } else {
      const result = await getAllorderDb();

      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { createOrder,getOrders };
