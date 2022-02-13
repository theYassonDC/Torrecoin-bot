const { Schema, model} = require("mongoose");

const economia = new Schema({
    userID: String,
    monedas: {
        type: Number,
        default: 0
    },
    diamond: {
        type: Number,
        default: 0
    },
    gold: {
        type: Number,
        default: 0
    },
    banco: {
        type: Number,
        default: 0
    }
})

module.exports = model(`economia`, economia)