const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "commands",
  alias: ["comandos", "cmds"],
  execute(client, message, args, cmd_name){
    const ui = new MessageEmbed()
    .setTitle("Categoria de comandos del bot Torrecoin")
    .setDescription(`Comandos generales recuerda si hay un bug lo puedes reportar en el canal de reportes\nComandos handler & even\nComandos cargados: +8`)
    .addField(`Economy commands`, "\`$balance\`,  \`$minar\`,  \`$shop\`,  \`$work\`,  \`$buyitem\`, \`$sellitem\`,\`$dep-bank (cantidad) o all\`,\`$with-bank (cantidad) o all\`")
    .addField(`Utils`, "`$avatar (@user)`,  `$snipe (@user)`,  `$leaderboard`,  `$botinfo`,  `$serverinfo`,  `$ranks`")


    message.reply({embeds:[ui]})
  }
}