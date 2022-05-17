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
      if(money.banco === 130000) return message.channel.send("No puedes depositar mas dinero tu banco ya llego a su tope!")
      const message1 = new MessageEmbed()
      .setDescription(`${message.author} depositaste a la cantidad de ${money.monedas} correctamente!!`)
      if(money.banco < 130000){
       await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas - 130000})
       await economia.findOneAndUpdate({userID: message.author.id},{banco: money.banco + 130000}) 
      }else{
        await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas - money.monedas})
        await economia.findOneAndUpdate({userID: message.author.id},{banco: money.banco + money.monedas}) 
      }
      message.reply({embeds: [message1]})
    }else{
      if(money.banco === 130000) return message.channel.send("No puedes depositar mas dinero tu banco ya llego a su tope!")
      let opt = Number(args[0])
      if(!opt) return message.reply("No encuentro algún valor escribe `$dep (cantidad) o all`")
      if(opt > money.monedas) return message.reply(`No tienes esa cantidad en tu monedero!!`)
      if(opt > 130000) return message.reply("No puedes agregar mas de la cantidad maxima de tu banco!")
      const message2 = new MessageEmbed()
      .setDescription(`${message.author} depositaste la cantidad de ${args[0]} correctamente!!`)
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: money.monedas - opt})
      await economia.findOneAndUpdate({userID: message.author.id}, {banco: money.banco + opt})
      message.reply({embeds: [message2]})
    }

    
  }
}