const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/shop`);
const adm = require(`../../Shema/rank`);


module.exports = {
   name: "add-item",
  alias: ["add-shop"],
  rank: true,
  async execute(client, message, args){
    const idRandom = Math.round(Math.random()*100+30)
    
    const producto1 = String(args.slice(1).join(" "))
    const precio1 = Number(args[0])
    let conv = (precio1) => String(precio1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    
    if(!producto1) return message.reply("Debes dar un nombre al producto.")
    if(!precio1) return message.reply("Debes colocar el precio del producto.")
    
    const data = await economia.findOne({ userID: message.author.id })
    if (!data) {
      let datos_nuevos = new economia({
        id: idRandom,
        userID: message.author.id,
        producto: producto1,
        precio: precio1
      })
      await datos_nuevos.save()
      return  message.reply(`**Nuevo producto**\nNombre: \`${producto1}\`\nPrecio: \`$${conv(precio1)}\`\nID: \`${idRandom}\` `)
    }
    if(data){
      let datos_nuevos = new economia({
        id: idRandom,
        userID: message.author.id,
        producto: producto1,
        precio: precio1
      })
      await datos_nuevos.save()
      return  message.reply(`**Nuevo producto**\nNombre: \`${producto1}\`\nPrecio: \`$${conv(precio1)}\`\nID: \`${idRandom}\` `)
    }

  }
}