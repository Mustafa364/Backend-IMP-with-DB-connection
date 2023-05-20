const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Get All Teacher Data");
});
route.get("/:id", (req, res) => {
  res.send("Get Single Teacher Data");
});
route.post("/", (req, res) => {
  res.send("Post Single Teacher Data");
});
route.put("/:id", (req, res) => {
  res.send("Edit Teacher Data");
});
route.delete("/:id", (req, res) => {
  res.send("Delete Teacher");
});

module.exports = route;