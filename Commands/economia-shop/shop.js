const { MessageEmbed} = require('discord.js');
const economia = require(`../../Shema/shop`);
const adm = require(`../../Shema/rank`);


module.exports = {
   name: "tienda",
  alias: ["shop", "store"],
  async execute(client, message, args){
    const datos = await economia.find({ userID: message.author.id })
    

    let list = datos.map((product, index)=>{
      const monedas = product.precio
      let conv = (monedas) => String(monedas).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      return `${index+1}. **${product.producto}** - <:moneda:909696267821658112>${conv(monedas)}\n` 
    })

    let listShop = list.join("\n")
    
    const ui = new MessageEmbed()
    .setTitle(`Economy story global`)
    .setDescription(` Tienda global Torrecoin\nPara comprar escribe \`$buyitem [nombre del item] | $buy-item\`\n\n${listShop} `)
    .setColor(`#86fff3`)
    .setFooter("Store economy v1.0.2 | by Juanda")
    message.reply({embeds:[ui]})
  }
}