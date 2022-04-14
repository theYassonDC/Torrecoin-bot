const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "add-diner",
  alias: ["add-money"],
  rank: true,
  async execute(client, message, args){
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
    let conv3 = (added) => String(added).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    await economia.findOneAndUpdate({userID: member.id}, {monedas: money + Number(added)})

    const balance = new MessageEmbed()
    .setDescription(`El administrador ${message.author} agrego la cantidad de **$${conv3(added)}** dinero al usuario ${member}`)
    .setColor(`GREEN`)
    message.reply({embeds:[balance]})
  }
}