const express = require("express");
const { PrismaClient } = require("@prisma/client");
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "formdata76@gmail.com",
    pass: "xvnrteozwlmevlwd",
  },
});

app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, subject, comments } = req.body;

    const contact = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        comments,
      },
    });

    const mailOptions = {
      from: "formdata76@gmail.com",
      to: "andrewleurs2@gmail.com", 
      subject: "Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Subject: ${subject}
        Comments: ${comments}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(200).json({ message: "Contact created successfully", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
