const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "add-diner",
  alias: ["add-money"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) 
  if(!args[1]) return message.reply(`Menciona a un usuario`)    
    const eco = await economia.findOne({userID: member.id})
      if(!eco){
          let datosnuevos = new economia({
              userID: member.id,
              monedas: added,
              Diamond: 0
          })
          await datosnuevos.save()
          return message.reply("Datos guardados!!, usa el comando nuevamente")
      }
    let money = eco.monedas
    let added = Number(args[0])
    if(!added) return message.reply("Agrega la cantidad que quieres agregar de dinero")

    await economia.findOneAndUpdate({userID: member.id}, {monedas: money + Number(added)})

    const balance = new MessageEmbed()
    .setDescription(`El administrador ${message.author} agrego la cantidad de **$${added}** dinero al usuario ${member}`)
    .setColor(`GREEN`)
    message.reply({embeds:[balance]})
  }
}