// const http = require("http");
// const PORT = 3000;

// const getUsers = require("./module/users");
// const greeting = require("./module/hello");

// const server = http.createServer((req, res) => {
//   console.log("server");
//   if (req.url === "/users") {
//     res.status = 200;
//     res.statusMessage = "OK";
//     res.header = "Content-Type: application/json";
//     res.write(getUsers());
//     res.end();
//     return;
//   }
//   res.status = 200;
//   res.statusMessage = "OK";
//   res.header = "Content-Type: text/plain";
//   res.write(greeting);
//   res.end();
// });

// server.listen(PORT, "localhost", () => {
//   console.log(`Сервер запущен ${PORT}`);
// });

import express from "express";
import http from "http";
import usersJson from "./data/users.json" with {type: "json"}

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  const name = req.query.hello;
  const users = req.query.users;

  if (name === "") {
    res.status(400).send("Enter a name");
  } else if (name) {
    res.status(200).send(`Hello, ${name}`);
  } else if (users === "") {
     res.status(200).json(usersJson);
  }
  if (Object.keys(req.query).length) {
    res.status(500).send("");
  }
  res.status(200).send("Hello, world");
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server started");
});
