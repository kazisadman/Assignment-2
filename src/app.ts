import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './modules/product/product.route';
import { orderRouter } from './modules/order/order.route';

const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
