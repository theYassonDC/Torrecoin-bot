const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const vertion = require('../../package.json');
const images = require('../../public/image/images.json');
const commands_info = require('../../public/infoCMS/commandsInfo.json');

module.exports = {
   name: "help",
   alias: ["ayuda","?"],
  async execute(client, message, args){
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
        },
        {
          label: "Volver a inicio",
          description: "Volver a ver la información general",
          emoji: "⬅️",
          value: '6'
        }
        ])
    )
    // Embed defalut
    const info = new MessageEmbed()
    .setTitle(`Informacion de torrecoin`)
    .setDescription(`Esta es la categoria general de comandos de el bot cualquier duda o inconveniente no dudes en entrar a nuestro servidor!\n\n⚙️ | **Bot versión -** \`${vertion.version}\`\n🖲️ | **Prefix -** \`$\``)
    .addField("Categoria de comandos", commands_info.general)
    .setThumbnail(`${images.thumnails.image_01}`)
    .setImage(`${images.thumnails.image_02}`)
    .setFooter("Torrecoin bot by JuandaDC | beta version")
    .setColor("#fffa00")

    // Embeds
    const info_2 = new MessageEmbed()
    .setTitle('Información premium')
    .setDescription("Pronto información sobre comandos y ventajas premium 👀!")
    .setColor("#fffa00")
    
    const info_3 = new MessageEmbed()
    .setTitle('Información economia general')
    .setDescription("Comandos generales de economia que tengo para ti")
    .addField("Economy commands", commands_info.economyCMS)
    .setColor("#fffa00")
    
    const info_4 = new MessageEmbed()
    .setTitle('Información tienda global')
    .setDescription("Comandos de tienda la tienda global donde puedes comprar items con tus monedas")
    .addField("Shop commands", commands_info.shopCMS)
    .setColor("#fffa00")
    .setFooter("Pronto se agregaran mas comandos en esta categoria!")
    
    // Collector set
    const m = await message.reply({embeds: [info],components: [row]})
    const collector =  m.createMessageComponentCollector({componentType: "SELECT_MENU"})
    // Collector events
    collector.on("collect", async e =>{
      let value = e.values[0]
      if(value === "1"){
          await e.deferUpdate()
          m.edit({embeds: [info_2], components: [row]})
        }
      if(value === "2"){
        await e.deferUpdate()
        m.edit({embeds: [info_3], components: [row]})
      }
      if(value === "3"){
        await e.deferUpdate()
        m.edit({embeds: [info_4], components: [row]})
      }
      if(value === "6"){
        await e.deferUpdate()
        m.edit({embeds: [info], components: [row]})
      }
    });
  }
}