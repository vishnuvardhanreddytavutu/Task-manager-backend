require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/tasks", require("./routes/task"));
app.use("/api/dashboard", require("./routes/dashboard"));

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ DB Connected");

    app.listen(process.env.PORT, () =>
      console.log("🚀 Server running on port " + process.env.PORT)
    );
  })
  .catch(err => console.log(err));

// TEST
app.get("/", (req, res) => {
  res.send("Server working ✅");
});