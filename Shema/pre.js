const m = require("mongoose");
const { Schema, model } = require("mongoose");
module.exports = m.model(`premium`, new m.Schema({
  user: String,
  tag: String
})
)