const express = require("express");
const app = express();

app.use(express.json());

// ✅ Render के लिए dynamic port जरूरी
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Webhook running ✅");
});

app.post("/webhook", (req, res) => {
  console.log("DATA:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
