const express = require("express");
const path = require("path");
// Helper method for generating unique ids
const db = require("./db/db.json");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json()); //understand content-type : application/json
app.use(express.urlencoded({ extended: true })); // understands content that is urlencoded

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET request for reviews
app.get("/api/notes", (req, res) => {
  res.status(200).json({ example: 1 });
});

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.post("/api/notes", (req, res) => {
  //pull data out form req.body
  //push to the db array
  // write to file
});

app.delete("/api/notes", (req, res) => {
  //pull from url
  // remove item from array
  // write to file
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
