const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "deposit",
  alias: ["depositar", "dep"],
  async execute(client, message, args){
    const money = await economia.findOne({userID: message.author.id})

    if(!money.monedas) return message.channel.send(`No tienes dinero para depositar a tu tarjeta.`)
    if(args[0] === `all`){
      const message1 = new MessageEmbed()
      .setDescription(`${message.author} depositaste a tu tarjeta la cantidad de ${money.monedas} correctamente!!`)
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas - money.monedas})
      await economia.findOneAndUpdate({userID: message.author.id},{banco: money.banco + money.monedas})
      message.reply({embeds: [message1]})
    }else{
      let opt = args[0]
      const message2 = new MessageEmbed()
      .setDescription(`${message.author} depositaste a tu tarjeta la cantidad de ${args[0]} correctamente!!`)
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas - Number(opt)})
      await economia.findOneAndUpdate({userID: message.author.id}, {banco: money.banco + Number(opt)})
      message.reply({embeds: [message2]})
    }

    
  }
}