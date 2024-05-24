import Order from "./order.interface";
import orderModel from "./order.model";

const createOrderInDb = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};

export {createOrderInDb}
