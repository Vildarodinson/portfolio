const express = require("express");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const path = require("path"); 

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname)));



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

    res.status(200).json({ message: "Contact created successfully", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
