import { Response, Request } from "express";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from "./db/db";
const scenarioRoutes =require("./routes/scenario.route");
const vehicleRoutes =require("./routes/vehicle.route");

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE'
  })
);

dbConnect();

//routes
app.get('/', (req: Request, res: Response) => {
  res.send({ title: 'Express js' })
});

app.use('/api/v1',scenarioRoutes,vehicleRoutes)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

module.exports = app;