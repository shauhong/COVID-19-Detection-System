const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const verifyToken = require("./verifyToken");

//Sign Up
router.post("/register", async (req, res) => {
  //Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //Check User Existence
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send({ message: "Email Already Exist" });

  //Hash Password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create User
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name,
    phone: req.body.phone,
    facilityName: req.body.facilityName,
    facilityAddress: req.body.facilityAddress,
    postal: req.body.postal,
    state: req.body.state,
    city: req.body.city
  });

  try {
    const savedUser = await user.save();

    const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET);
    res.header("authorization", token).json({
      success: true,
      message: "Successfully Registered",
      token: token,
      savedUser: savedUser
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Login
router.post("/login", async (req, res) => {
  //Validation
  const { error } = loginValidation(req.body);
  if (error)
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });

  //Check User Existence
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .send({ success: false, message: "Email Does Not Exist" });

  //Check Password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(400)
      .send({ success: false, message: "Incorrect Password" });

  //Sign JWT Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res
    .header("authorization", token)
    .json({ success: true, message: "Successfully Login", token: token });
});

//Get
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json(user);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});

module.exports = router;
