import express from "express";
import cookieParser from "cookie-parser";

import { PORT, SERVER_URL } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import { connectDB } from "./database/mongoDB.js";

// Middlewares
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

connectDB();

const app = express();
app.use(errorMiddleware);
app.use(arcjetMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.get("/", (req, res) => {
  res.send(`Welcome to the Subscription Tracker API`);
});

app.listen(PORT, () => {
  console.log(`The website is running on ${SERVER_URL}:${PORT}`);
});

export default app;
