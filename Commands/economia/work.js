const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const cooldown = new Set();
const adm = require(`../../Shema/rank`)
const replies = require('../../Shema/replys')

module.exports = {
   name: "work",
   alias: ["trabajar","wr"],
  async execute(client, message, args){
  const adms = await adm.findOne({user: message.author.id})
if(!adms){
      if(cooldown.has(message.author.id)){
        message.reply("⏰ | **Hey espera unos `1 hora` para ejecutar el comando nuevamente**")
        return;
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, 9000000)
}
      const data = await economia.findOne({userID: message.author.id})
      const reply = await replies.find()
      if(!data){
          let datosnuevos = new economia({
              userID: message.author.id,
              monedas: 0,
              Diamond: 0
          })
          await datosnuevos.save()
      }
      const dinero = data.monedas
      const coinFlip = Math.floor(Math.random() * 430) 
    let lista = reply.map((val)=>{
      return val.mensaje + ` <:moneda:909696267821658112>${coinFlip}`
    })
      const msg = [`felicidades`]
      const randomS = Math.floor(Math.random () * lista.length);
      const random = lista[randomS]



      const embed = new MessageEmbed()
      .setTitle("Trabajaste!")
      .setDescription(`${random}`)
      .setColor(`GREEN`)
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: dinero + Number(coinFlip)})

      message.reply({embeds: [embed]})
  }
}
