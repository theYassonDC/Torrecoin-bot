const m = require("mongoose");
const { Schema, model} = require("mongoose");
module.exports = m.model(`intentory`, new m.Schema({
  server: String,
  userID: String,
  item: {
    type: Object
  },
  itemIds: Object
})
)