import express from "express";
import cors from "cors";
import { prisma } from "./prisma/prisma-client";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/convert", async (req, res) => {
  const data = await prisma.convert.findMany({
    take: 5,
  });
  return res.status(201).json({ message: "Got data", data });
});

app.post("/convert", async (req, res) => {
  const { title, current } = req.body;
  console.log(title, current);
  const data = await prisma.convert.findMany();

  const baseCurrency = data.find((item) => item.title === title);
  if (!baseCurrency) {
    return res.status(400).json({ message: "Валюта не найдена" });
  }

  const newData = data.map((item) => ({
    id: item.id,
    title: item.title,
    currency: (item.currency / baseCurrency.currency) * current, // Пересчитываем курс
  }));

  return res.status(200).json({ message: `New data`, data: newData });
});

app.listen(5174, () => console.log("Port 5174 is running"));
