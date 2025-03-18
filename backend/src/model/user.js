const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    address: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const userModel = mongoose.model("user", schema);
module.exports = userModel;
