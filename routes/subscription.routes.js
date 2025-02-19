import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ message: "Subscription Get" });
});

subscriptionRouter.get("/:id", authorize, getUserSubscriptions);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ message: "Subscription Update" });
});

subscriptionRouter.patch("/:id", (req, res) => {
  console.log(req.body);
  res.send({ message: "Subscription Patch" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ message: "Subscription Get User-id" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ message: "Subscription Cancel" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "Subscription Cancel" });
});

export default subscriptionRouter;
