const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)
const cooldown = new Set();

module.exports = {
   name: "daily",
  alias: ["daily", "reward"],
  async execute(client, message, args){   
      if(cooldown.has(message.author.id)){
        message.reply("⏰ | **Debes esperar `24 horas` para volver a reclamar tu recompenza de nuevo**")
        return;
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, 1000 * 60 * 60 * 24)
      const data = await economia.findOne({userID: message.author.id})
      if(!data){
          let datosnuevos = new economia({
              userID: message.author.id,
              monedas: 0,
              Diamond: 0,
              gold: 0
          })
          await datosnuevos.save()
      }
    
    let dinero = data.monedas
    let oro = data.gold
    const coinFlip = Math.floor(Math.random() * 2000) + 1
    const goldFlip = Math.floor(Math.random() * 500) + 1
    let conv3 = (coinFlip) => String(coinFlip).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    
    const embed = new MessageEmbed()
    .setTitle(`Recompensa diaria reclamada! ${message.author.tag}`)
    .setDescription(`> <:moneda:909696267821658112> **Monedas :** \`${conv3(coinFlip)}\`\n> <:Gold:915760542579310592>**Oro :** \`${goldFlip}\``)
    .setColor(`#fw5e3`)
    .setFooter(`Hoy - ${message.createdAt.toLocaleDateString("en-us")}`)
    message.reply({embeds: [embed]})
   await economia.findOneAndUpdate({userID: message.author.id}, {monedas: dinero + Number(coinFlip)}, {gold: oro + Number(goldFlip)})
    
  }
}