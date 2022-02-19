const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const cooldown = new Set();
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "work",
   alias: ["trabajar","wr"],
  async execute(client, message, args){
      if(cooldown.has(message.author.id)){
        message.reply("⏰ | **Hey espera unos `1 hora` para ejecutar el comando nuevamente**")
        return;
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, 90000)
      
      const data = await economia.findOne({userID: message.author.id})
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


      const msg = [`Felicidades luego de un buen farmeo ganaste la cantidad de ${coinFlip}<:moneda:909696267821658112>`, `Eres un maestro de las minado torrecoin pudiste ganar esta cantidad: ${coinFlip}<:moneda:909696267821658112>`, `[GFHDF] Segun los calculos hechos en este momento por el work pudiste ganar ${coinFlip}<:moneda:909696267821658112>`, `GG | Ganaste la cantidad de ${coinFlip}<:moneda:909696267821658112>`, `Sigue asi ganaste ${coinFlip}<:moneda:909696267821658112>`, `Desifraste algunos codigos de la blockchain de torrecoin y ganaste la cantidad de ${coinFlip} <:moneda:909696267821658112>!!`, `**El programador de torrecoin te dio la cantidad de \`${coinFlip}\` por ayudarlo en un bug sin que lo reportes sjajsajsa grande!!**`]
      const randomS = Math.floor(Math.random () * msg.length);
      const random = msg[randomS]





      const embed = new MessageEmbed()
      .setTitle("Trabajaste!")
      .setDescription(`${random}`)
      .setColor(`GREEN`)
      await economia.findOneAndUpdate({userID: message.author.id}, {monedas: dinero + Number(coinFlip)})

      message.reply({embeds: [embed]})
  }
}
