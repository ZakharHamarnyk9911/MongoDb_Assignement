const express = require("express");
const app = express();
const mongoose = require("mongoose");
const marketRouter = require("./routes/MarketRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to MarketPlace application." });
    });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
app.use("/api/products", marketRouter);



mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://zakhar:SPMJETtvZQLh9WYm@cluster1.z5ls3dn.mongodb.net/test",
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

  mongoose.connection.on('error', () => {
    throw new Error('Unable to connect to database: "mongodb+srv://zakhar:SPMJETtvZQLh9WYm@cluster1.z5ls3dn.mongodb.net/test') 
})

