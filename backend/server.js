const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('./assets'));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database Connection Established Successfully");
});

const patientsRouter = require('./routes/patients');
const userRoute = require("./routes/users");

app.use('/patients',patientsRouter);
app.use("/users", userRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
