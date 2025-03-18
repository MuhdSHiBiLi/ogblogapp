const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    blogtitle: String,
    blogdiscription: String,
    blogimgurl: String,
    createAt: {
      type: Date,
      default: new Date(),
    },
  },
  { versionKey: false }
);

const postModel = mongoose.model("post", schema);
module.exports = postModel;
