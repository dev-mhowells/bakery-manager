require('dotenv').config({path: './.env.development'});
const express = require("express");
const mongoose = require("mongoose");
const itemsRouter = require("./routes/items");
const ordersRouter = require("./routes/orders");

const PORT = process.env.PORT || 3001;
const app = express();

// Set up mongoose connection
mongoose.set('strictQuery', false);
const mongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ds0ycgm.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

app.use(express.json())
app.use("/items", itemsRouter);
app.use("/orders", ordersRouter);


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


app.get("/api", (req, res) => {
    res.json({ message: "Hello from Expressingssi!" });
  });

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
