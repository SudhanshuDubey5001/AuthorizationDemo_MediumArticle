const User = require("../modals/userModal");
const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign(
    { _id }, //payload you want to use (no senstive data allowed)
    process.env.SECRET_KEY, // a secret random string, complicated the better
    { expiresIn: "3d" } //expire the token in 3 days once authenticated
  );
};

const user_signup = async (req, res) => {
  console.log("Signing up...");
  const { email, password } = req.body;
  console.log("email ="+email);
  console.log("password ="+password);
  try {
    const user = await User.signup(email, password);
    console.log('Generating token now...');
    const token = generateToken(user._id);
    console.log('Token generated = '+token);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const user_login = async (req, res) => {
  console.log("Logging in...");
  const { email, password } = req.body;
  console.log('Email = '+email)
  console.log('Password = '+password)
  try {
    const user = await User.login(email, password);
    const token = generateToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    user_login,
    user_signup
}
