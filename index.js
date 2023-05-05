const express = require("express");
const path = require("path");
// Helper method for generating unique ids
const { v4: uuidv4 } = require("uuid");
// const notes = require("./db/db.json");
const fs = require("fs");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json()); //understand content-type : application/json
app.use(express.urlencoded({ extended: true })); // understands content that is urlencoded

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("/api/notes", (req, res) => {
  // res.status(200).json({ notes: 1 });
});

// app.post("/api/notes", (req, res) => {
//   console.log(req.body);
// });

app.post("/api/notes", (req, res) => {
  console.info(`${req.method} request received to add a new note`);
  //pull data out form req.body
  // const { id, title, text } = req.body
  const notesData = req.body;
  //push to the db array
  if (notesData) {
    const newNote = {
      id: uuidv4(),
      title,
      text,
    };

    const noteString = JSON.stringify(newNote);

    // write to file
    fs.writeFile(`./db/${newNote}.json`, noteString, (err) =>
      err
        ? console.log(err)
        : console.log(`Review for ${newNote.id} has been written to JSON file`)
    );
  }
});

app.delete("/api/notes", (req, res) => {
  //pull from url
  // remove item from array
  // write to file
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
