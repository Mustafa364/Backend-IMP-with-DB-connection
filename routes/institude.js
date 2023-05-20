const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Get All Institude Data");
});
route.get("/:id", (req, res) => {
  res.send("Get Single Institude Data");
});
route.post("/", (req, res) => {
  res.send("Post Single Institude Data");
});
route.put("/:id", (req, res) => {
  res.send("Edit Institude Data");
});
route.delete("/:id", (req, res) => {
  res.send("Delete Institude");
});

module.exports = route;