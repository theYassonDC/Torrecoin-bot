const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "add-diamond",
  alias: ["add-diamond"],
  admin: true,
  async execute(client, message, args){ 
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) 
  if(!args[1]) return message.reply(`Menciona a un usuario`)    
    const eco = await economia.findOne({userID: member.id})
    let added = Number(args[0])
      if(!eco){
          let datosnuevos = new economia({
              userID: member.id,
              monedas: 0,
              diamond: added,
              gold: 0,
          })
          await datosnuevos.save()
      }
    let diamante = eco.diamond
    if(!added) return message.reply("Agrega la cantidad que quieres agregar de dinero")
    let conv3 = (added) => String(added).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    await economia.findOneAndUpdate({userID: member.id}, {diamond: diamante + Number(added)})

    const balance = new MessageEmbed()
    .setDescription(`El administrador ${message.author} agrego la cantidad de **$${conv3(added)}** diamantes al usuario ${member}`)
    .setColor(`GREEN`)
    message.reply({embeds:[balance]})
  }
}