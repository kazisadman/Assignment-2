import express, { Application, Request, Response } from "express";
import cors from 'cors'
import { productRoutes } from "./modules/product/product.route";

const app:Application = express();

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use("/api/products",productRoutes);

app.get("/", (req:Request, res:Response) => {
  res.send("Hello World!");
});

export default app;
