require('dotenv').config();
const express = require("express");
const itemsRouter = require("./routes/items");

const PORT = process.env.PORT || 3001;
const app = express();

//Change 'dev' to 'production' when using real database
process.env.STATUS === 'dev' ?(DATABASE_NAME = process.env.DATABASE)
: (DATABASE_NAME = process.env.TEST_DATABASE)
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ds0ycgm.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

app.use(express.json())
app.use("/items", itemsRouter);


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


app.get("/api", (req, res) => {
    res.json({ message: "Hello from Expressingssi!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});