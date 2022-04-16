require("dotenv").config();
const prefix = process.env.PREFIX;
const adm = require('../../Shema/rank')
const tester = require('../../Shema/tester')

module.exports = {
  name:`messageCreate`,
  async run(client, message){
  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) return

  const prefix = "$"
  if (!message.content.startsWith(prefix)) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();
  let cmds = client.commands.find((c) => c.name === command || (c.alias && c.alias.includes(command)));
    // Questions
  if(!cmds) return message.channel.send("No tengo ese comando en mi lista, consulte escribiendo `$commands` para ver todos mis comandos")
    // Command rank
  if(cmds.admin){
      let valid = await adm.findOne({user: message.author.id})
      if(!valid) return message.reply(`<:modBag:915764671204692008> | **No eres administrador para usar este comando**`)
  }
  if(cmds.tester){
    let validation = await tester.findOne({user: message.author.id})
    if(!validation) return message.reply(`<:modBag:915764671204692008> | **Este comando solo puede ser utilizado para los testiadores!*\n\n[!] Pronto comando publico**`)
  }
    // Ejecutar args
    if(cmds) {
    cmds.execute(client, message, args)
  }
  }
}