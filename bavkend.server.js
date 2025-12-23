const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usage = require("./models/Usage");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/productivityDB");

const productiveSites = ["leetcode", "github", "stackoverflow"];
const unproductiveSites = ["facebook", "instagram", "youtube"];

app.post("/track", async (req, res) => {
    const { url, time } = req.body;

    let category = "Neutral";
    if (productiveSites.some(site => url.includes(site)))
        category = "Productive";
    if (unproductiveSites.some(site => url.includes(site)))
        category = "Unproductive";

    await Usage.create({ url, time, category });
    res.sendStatus(200);
});

app.get("/report", async (req, res) => {
    const data = await Usage.find();
    res.json(data);
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
