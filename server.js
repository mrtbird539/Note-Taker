const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.argv.env || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.listen(PORT, () => {
    console.log(`Server is now listening at ${PORT}`);
});
