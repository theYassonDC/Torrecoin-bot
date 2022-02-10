require("dotenv").config();
const prefix = process.env.PREFIX;
const adm = require('../../Shema/rank')

module.exports = async (client, discord, message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) return

  const prefix = "$"
  if (!message.content.startsWith(prefix)) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();
  let cmds = client.commands.find((c) => c.name === command || (c.alias && c.alias.includes(command)));
  if (cmds) {
    cmds.execute(client, message, args)
  }
};