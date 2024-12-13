const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/submit", (req, res) => {
  const { firstName, lastName, companyName, email, message } = req.body;
  console.log("Form Submitted:", {
    firstName,
    lastName,
    companyName,
    email,
    message,
  });
  res.json({ success: true });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
