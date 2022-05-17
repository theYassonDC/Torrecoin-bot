const m = require("mongoose");
const { Schema, model} = require("mongoose");
module.exports = m.model(`level`, new m.Schema({
  user: String,
  guild: String,
  exp: {
    type:Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  expTotal: {
    type:Number
  }
})
)