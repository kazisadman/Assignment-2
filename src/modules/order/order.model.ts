import { Schema } from 'mongoose';
import Order from './order.interface';
import mongoose from 'mongoose';

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderModel = mongoose.model('Order', orderSchema);

export default orderModel;
