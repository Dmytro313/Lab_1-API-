const express = require("express");

const app = express();
const PORT = 3000;

app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running"
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
}); 