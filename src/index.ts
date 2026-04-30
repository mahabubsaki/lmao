import express from "express";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 7000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "H2ello from Exp2ress + Type2Sc2rip2t2" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
