import { ObjectId } from "mongoose";

type Order = {
  email: string;
  productId: ObjectId;
  price: number;
  quantity: number;
};

export default Order;
