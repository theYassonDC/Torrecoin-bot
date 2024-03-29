const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "add-diamond",
  alias: ["add-diamond"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")
    
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

    await economia.findOneAndUpdate({userID: member.id}, {diamond: diamante + Number(added)})

    const balance = new MessageEmbed()
    .setDescription(`El administrador ${message.author} agrego la cantidad de **$${added}** diamantes al usuario ${member}`)
    .setColor(`GREEN`)
    message.reply({embeds:[balance]})
  }
}