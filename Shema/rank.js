const m = require("mongoose");
const { Schema, model} = require("mongoose");
module.exports = m.model(`administrador`, new m.Schema({
  user: String
})
)