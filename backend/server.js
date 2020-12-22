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

// const medicalRouter = require('./routes/medical');
// const patientRouter = require('./routes/patient');
const userRoute = require("./routes/users");


// app.use('/medical',medicalRouter);
// app.use('/patient',patientRouter);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
