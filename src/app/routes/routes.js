const express = require("express");
const userRepository = require("../repositories/UserRepository");

const app = express.Router();

app.post("/", (req, res) => {
  userRepository
    .create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  userRepository
    .findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  userRepository
    .findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  userRepository
    .deleteById(id)
    .then(res.status(200).json([]))
    .catch(err => {
      console.log(err);
    });
});

app.put("/:id", (req, res) => {
  let { id } = req.params;
  userRepository
    .updateById(id, req.body)
    .then(res.status(200).json([]))
    .catch(err => {
      console.log(err);
    });
});

module.exports = app;
