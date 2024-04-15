require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

const githubData = {
    id: "omnath-shinde",
    name: "Omnath Shinde",
};

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("hiteshdotcom");
});

app.get("/login", (req, res) => {
    res.send("<h1>Please login at chai aur code</h1>");
}); // if 'Cannot GET /login' then restart the server

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur code</h2>");
}); // if 'Cannot GET /youtube' then restart the server

app.get("/github", (req, res) => {
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
