const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Webhook running ✅");
});

app.post("/webhook", (req, res) => {
  console.log("DATA:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running"));
