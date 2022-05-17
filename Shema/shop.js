const m = require("mongoose");
const { Schema, model} = require("mongoose");
module.exports = m.model(`tienda`, new m.Schema({
  id: {
    type: Number,
    unique: true
  },
  userID: String,
  producto: {
    type: String
  },
  precio: {
      type: Number,
      default: 0
  },
  ltd:{
    type: Number,
  },
  use: String,
  description: String,
  itemCategori: String
  
})
)