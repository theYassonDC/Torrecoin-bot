const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const vertion = require('../../package.json');
const images = require('../../public/image/images.json')

module.exports = {
   name: "help",
   alias: ["ayuda","?"],
  execute(client, message, args){
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setPlaceholder("Selecciona una opcion")
      .setCustomId('menu_help')
      .addOptions([
				{
					label: 'Premium',
					description: 'Al aportar podras tener unos beneficios con el bot mira mas!',
          emoji: `<:superidol:942188882114543646>`,
					value: '1'
				},
        {
          label: 'Economia general',
          description: 'Comandos generales sobre la economia y mas',
          emoji: "💸",
          value: '2'
        },
        {
          label: 'Tienda global',
          description: "Comandos sobre la tienda y informacion te items",
          emoji: "<:inv:955021488518475826>",
          value: '3'
        },
        {
          label: "Comandos utiles",
          description: "Mas comandos que te pueden interesar como informacion y mucho mas sobre el bot",
          emoji: "⭐",
          value: '4'
        },
        {
          label: "Economia minera blockchain",
          description: "Comandos sobre una simulacion de mineria blockchain unicas!",
          emoji: "<:moneda:909696267821658112>",
          value: '5'
        }
        ])
    )
    
    const info = new MessageEmbed()
    .setTitle(`Informacion de torrecoin`)
    .setDescription(`Esta es la categoria general de comandos de el bot cualquier duda o inconveniente no dudes en entrar a nuestro servidor!\n\n⚙️ | **Bot versión -** \`${vertion.version}\`\n🖲️ | **Prefix -** \`$\``)
    .addField("Categoria de comandos", "<:exp:960234903247663104> **Selecciona alguna categoria del menu para poder ver todos los comandos de tal categoria.**\n[-------------------------------------------------------](https://torrecoin.gg)\n<:superidol:942188882114543646> `|` **Premium**\n💸 `|` **Economia general**\n<:inv:955021488518475826> `|` **Tienda global & items**\n⭐ `|` **Comandos utiles**\n<:moneda:909696267821658112> `|` **Economia minera blockchain**\n[-------------------------------------------------------](https://torrecoin.gg)")
    .setThumbnail(`${images.thumnails.image_01}`)
    .setImage(`${images.thumnails.image_02}`)
    .setFooter("Torrecoin bot by JuandaDC | beta version")
    .setColor("#fffa00")
    message.reply({embeds: [info],components: [row]})
  }
}