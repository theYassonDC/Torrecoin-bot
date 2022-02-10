const { MessageEmbed } = require('discord.js');

module.exports = {
   name: "help",
   alias: ["ayuda","?"],
  execute(client, message, args){
    const info = new MessageEmbed()
    .setTitle(`Informacion de el bot Torrecoin`)
    .setDescription(`Esta es mi lista de comandos que puedes ver\nAlguna duda entra al servidor de soporte [Torrecoin Suport](https://discord.gg/YYpBKg3awY)\n **Bot prefix:** $\n**Version:** 1.0.0\n\nTorrecoin bot de economia donde hay mucho detras de lo que es con muchos comandos [faqs](https://Torrecoin-bot.juandagamer.repl.co)`)
    .addField("Categorias", "> **$LoreCash**\nMira la un poco de las monedas que estan en la categoria general sobre la historia de la economi\n\n> **$commands**\nMira toda la categoria de comandos que hay de el bot\n\n> **$actualizaciones**\nMira todas las actualizaciones mediante un embed que se reporte cuando se añada algo nuevo")
    .setColor("#68ff83")
    message.reply({embeds: [info]})
  }
}