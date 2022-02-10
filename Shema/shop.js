const m = require("mongoose");
const { Schema, model} = require("mongoose");
module.exports = m.model(`tienda`, new m.Schema({
    userID: String,
    producto: {
      type: String
    },
    precio: {
        type: Number,
        default: 0
    }
})
)