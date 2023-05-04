const express = require("express");
const path = require("path");
// Helper method for generating unique ids
const uuid = require("./helpers/uuid");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json()); //understand content-type : application/json
app.use(express.urlencoded({ extended: true })); // understands content that is urlencoded

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET request for reviews
app.get("/api/example", (req, res) => {
  res.status(200).json({ example: 1 });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
