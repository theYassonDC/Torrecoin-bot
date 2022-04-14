module.exports = {
  name:`messageCreate`,
  run(client, message){
    if(message.content === `<@907547299675242496>`) return message.reply("> 🔸 Este es mi prefijo: `$`\n**Para ver mi lista de comandos escribe `$help`**")
  }
}