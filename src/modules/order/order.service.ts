import Order from "./order.interface";
import orderModel from "./order.model";

const createOrderInDb = async (order: Order) => {
    const result = await orderModel.create(order);
    return result;
}

const getAllorderDb = async () => {
  const result = await orderModel.find();
  return result;
};

const queryorderDb = async (query: any) => {
  const result = await orderModel.find({ $text: { $search: query } });
  return result;
};


export { createOrderInDb,getAllorderDb,queryorderDb };
