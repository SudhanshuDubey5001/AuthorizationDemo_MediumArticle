const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    console.log("One or more fields are empty");
    throw Error("One or more fields are empty");
  }
  if (!validator.isEmail(email)) {
    console.log("Please enter a valid email address");
    throw Error("Please enter a valid email address");
  }
  if (!validator.isStrongPassword(password)) {
    console.log("Password is not strong enough");
    throw Error("Password is not strong enough");
  }

  console.log("Validation ok");

  const exist = await this.findOne({ email });

  if (exist) {
    console.log("Email adress alredy exists");
    throw Error("Email address already exists");
  }

  console.log("Email is new");

  const salt = await bcrypt.genSalt(10);
  console.log("Got the salt");
  const hash = await bcrypt.hash(password, salt);
  console.log("Got the hash");
  const user = await this.create({ email, password: hash });
  console.log("User created");
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("One or more fields are empty");
  }
  console.log("Validation done Login");

  const user = await this.findOne({ email });
  console.log("User = " + user);
  if (!user) {
    console.log("Email  not registered");
    throw Error("Looks like the email address is not registered");
  }

  console.log("Email does exist");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw Error("Incorrect Password");

  console.log("password is correct");

  return user;
};

module.exports = mongoose.model("user", userSchema);
