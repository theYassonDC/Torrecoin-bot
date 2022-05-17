const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/shop`);
const adm = require(`../../Shema/rank`);

module.exports = {
  name: "tienda",
  alias: ["shop", "store"],
  async execute(client, message, args) {
    const datos = await economia.find({ userID: message.author.id })


    let list = datos.map((product, index) => {
      const monedas = product.precio
      let conv = (monedas) => String(monedas).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      return `\`ID:${product.id}\` **${product.producto}** [-](https://torrecoin.gg) <:moneda:909696267821658112>${conv(monedas)}\n`
    })

    let listShop = list.join("\n")

    const ui = new MessageEmbed()
      .setTitle(`<:inv:955021488518475826> Economy store global`)
      .setDescription(`Tienda global Torrecoin\nPara comprar escribe \`$buyitem [nombre del item] | $buy-item [id]\``)
      .addField(`Catalogo de items`, `${listShop}`)
      .setColor(`#86fff3`)
      .setImage(`https://media.discordapp.net/attachments/915768317212508180/955017986954125352/torrecoin_banner1.png`)
      .setFooter("Store economy v1.0.2 | by Juanda")
    message.reply({ embeds: [ui] })
  }
}