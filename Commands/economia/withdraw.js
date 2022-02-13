const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "sacar",
  alias: ["with-bank", "with"],
  async execute(client, message, args){
    const money = await economia.findOne({userID: message.author.id})

    if(!money.banco) return message.channel.send(`No tienes dinero para retirar`)
    if(args[0] === `all`){
      const message1 = new MessageEmbed()
      .setDescription(`${message.author} retiraste a tu banco la cantidad de ${money.banco} correctamente!!`)
      await economia.findOneAndUpdate({userID: message.author.id},{banco: money.banco - money.banco})
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas + money.banco})
      message.reply({embeds: [message1]})
    }else{
      let opt = args[0]
      if(!opt) return message.reply("No encuentro algún valor escribe `$with-bank (cantidad) o all`")
      if(opt > money.monedas) return message.reply(`No tienes esa cantidad en tu banco!!`)
      const message2 = new MessageEmbed()
      .setDescription(`${message.author} retiraste a tu banco la cantidad de ${args[0]} correctamente!!`)
      await economia.findOneAndUpdate({userID: message.author.id}, {banco: money.banco - Number(opt)})
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas + Number(opt)})
      message.reply({embeds: [message2]})
    }

    
  }
}