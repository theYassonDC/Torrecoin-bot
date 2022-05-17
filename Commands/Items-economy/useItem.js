const { MessageEmbed } = require('discord.js');
const inventory = require('../../Shema/inventory.js')

module.exports = {
   name: "use-item",
  alias: ["useitem", "use", "usaritem"],
  async execute(client, message, args){
    let arr = args[0]
    const inv = await inventory.findOne({userID: message.author.id})

    console.log(sr)
    
  }
}