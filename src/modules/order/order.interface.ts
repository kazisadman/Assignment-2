import { Types } from "mongoose";

type Order = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};

export default Order;
