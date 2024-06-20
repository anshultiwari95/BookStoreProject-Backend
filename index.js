import express from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["Get", "Post", "Put", "Delete"],
//     allowedHeader: ["Content-Type"],
//   })
// );

//Route to homepage
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERNStack BookStore Project");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening at port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
