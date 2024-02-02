const User = require("../modals/user");
const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "Authorization token required" });
  }

  console.log("Authorization token = " + authorization);

  const token = authorization.split(" ")[1];

  try {
    const { _id } = await jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = requireAuth;
