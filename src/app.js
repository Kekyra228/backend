const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/urers");
const bookRouter = require("./routes/books");
const notFound = require("./middlewares/notFound");
const originalUrl = require("./middlewares/originalUrl");

dotenv.config();

const app = express();
const { PORT, API_URL, MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Conneted to MongoDB"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(bodyparser.json());
app.use(originalUrl);
app.use(userRouter);
app.use(bookRouter);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Север запущен по адресу ${API_URL}:${PORT}`);
});
// app.get("/", (req, res) => {
//   const name = req.query.hello;
//   const users = req.query.users;

//   if (name === "") {
//     res.status(400).send("Enter a name");
//   } else if (name) {
//     res.status(200).send(`Hello, ${name}`);
//   } else if (users === "") {
//     res.status(200).json(usersJson);
//   }
//   if (Object.keys(req.query).length) {
//     res.status(500).send("");
//   }
//   res.status(200).send("Hello, world");
// });

// const server = http.createServer(app);

// server.listen(PORT, () => {
//   console.log("server started");
// });
