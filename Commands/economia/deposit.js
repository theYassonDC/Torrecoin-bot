const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "deposit",
  alias: ["depositar", "dep-bank", "dep"],
  async execute(client, message, args){
    const money = await economia.findOne({userID: message.author.id})

    if(!money.monedas) return message.channel.send(`No tienes dinero para depositar a tu banco.`)
    if(args[0] === `all`){
      const message1 = new MessageEmbed()
      .setDescription(`${message.author} depositaste a la cantidad de ${money.monedas} correctamente!!`)
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas - money.monedas})
      await economia.findOneAndUpdate({userID: message.author.id},{banco: money.banco + money.monedas})
      message.reply({embeds: [message1]})
    }else{
      let opt = Number(args[0])
      if(!opt) return message.reply("No encuentro algún valor escribe `$dep-bank (cantidad) o all`")
      if(opt > money.monedas) return message.reply(`No tienes esa cantidad en tu monedero!!`)
      const message2 = new MessageEmbed()
      .setDescription(`${message.author} depositaste la cantidad de ${args[0]} correctamente!!`)
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas - opt})
      await economia.findOneAndUpdate({userID: message.author.id}, {banco: money.banco + opt})
      message.reply({embeds: [message2]})
    }

    
  }
}