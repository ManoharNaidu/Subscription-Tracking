import nodemailer from "nodemailer";
import { EMAIL_PASSWORD } from "./env.js";

export const accountEmail = "bheesettimanohar27@gmail.com";

console.log(EMAIL_PASSWORD);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
