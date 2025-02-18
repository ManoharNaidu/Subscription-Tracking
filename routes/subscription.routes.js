import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ message: "Subscription Get" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ message: "Subscription-id Get" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ message: "Subscription Create" });
});

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
