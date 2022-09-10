const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)
const { GuildMember } = require('discord.js');

module.exports = {
   name: "test",
  alias: ["ti"],
  async execute(client, message, args){
    let a = message.guild.members.cache.get(args[0])
    if(!a) return message.channel.send('Usuario invalido')
    console.log(a.id)
  }
}