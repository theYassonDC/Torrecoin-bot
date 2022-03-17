const m = require("mongoose");
const { Schema, model} = require("mongoose");
module.exports = m.model(`tester`, new m.Schema({
  user: String,
  target: String
})
)