const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/shop`);
const adm = require(`../../Shema/rank`);


module.exports = {
   name: "add-item",
  alias: ["add-shop"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")

    const producto1 = String(args.slice(1).join(" "))
    const precio1 = Number(args[0])
    let conv = (precio1) => String(precio1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    
    if(!producto1) return message.reply("Debes dar un nombre al producto.")
    if(!precio1) return message.reply("Debes colocar el precio del producto.")
    
    const data = await economia.findOne({ userID: message.author.id })
    if (!data) {
      let datos_nuevos = new economia({
        userID: message.author.id,
        producto: producto1,
        precio: precio1
      })
      await datos_nuevos.save()
      return  message.reply(`**Nuevo producto**\nNombre: \`${producto1}\`\nPrecio: \`$${conv(precio1)}\` `)
    }
    if(data){
      let datos_nuevos = new economia({
        userID: message.author.id,
        producto: producto1,
        precio: precio1
      })
      await datos_nuevos.save()
      return  message.reply(`**Nuevo producto**\nNombre: \`${producto1}\`\nPrecio: \`$${conv(precio1)}\` `)
    }

  }
}