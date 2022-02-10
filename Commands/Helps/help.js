const { MessageEmbed } = require('discord.js');
const vertion = require('../../package.json')

module.exports = {
   name: "help",
   alias: ["ayuda","?"],
  execute(client, message, args){
    const info = new MessageEmbed()
    .setTitle(`Informacion de torrecoin`)
    .setDescription(`Es un bot de economia donde puedes divertirte y ser potencia a nivel minera!\n\n> **Prefix:** \`$\`\n> **Version:** \`${vertion.version}\`\n\n*Algún problema con un comando comunicar con Juanda#1679*`)
    .addField("Categorias", "> **$LoreCash**\nMira la un poco de las monedas que estan en la categoria general sobre la historia de la economi\n\n> **$commands**\nMira toda la categoria de comandos que hay de el bot\n\n> **$actualizaciones**\nMira todas las actualizaciones mediante un embed que se reporte cuando se añada algo nuevo")
    .setColor("#68ff83")
    message.reply({embeds: [info]})
  }
}