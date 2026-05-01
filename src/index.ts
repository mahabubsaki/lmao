import express from "express";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 7000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "SESXH2e2ll2o2 frodm Exp2ress + SDSD" + process.env.LOL });
});

app.get("/healths", (_req, res) => {
  res.json({ status: "o22Ss2", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
