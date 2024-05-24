import { Request, Response } from "express";
import { createOrderInDb } from "./order.service";

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

export { createOrder };
