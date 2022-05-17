const m = require("mongoose");
const { Schema, model } = require("mongoose");
module.exports = m.model(`reply`, new m.Schema({
  id: Number,
  user: String,
  mensaje: String
})
)