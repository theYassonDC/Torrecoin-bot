const { MessageEmbed } = require('discord.js');
const inventory = require(`../../Shema/inventory`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "inventory",
  alias: ["inv", "inventario"],
  async execute(client, message, args){
    const member = message.mentions.users.first() || message.author
    const data = await inventory.findOne({userID: member.id})
      if(!data) return message.reply(`El usuario ${member} no tiene items en su inventario.`)
      const listInv = Object.keys(data.item)
      .map((key, ind)=> {
        return `> \`${ind+1}\`. **${key}** - **(${data.item[key]})**`
      }).join("\n")   
    const embed = new MessageEmbed().setTitle(`Inventario de ${member.tag}`)
    .setDescription(`${listInv}`)
    .setColor(`#bdff25`)
      message.reply({embeds: [embed]})
  }
}