const { MessageEmbed, GuildMember } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const nivel = require('../../Shema/level')

module.exports = {
   name: "profile",
  alias: ["perfil", "info"],
  async execute(client, message, args){
    const member = message.mentions.users.first() || message.author;
    const eco = await economia.findOne({userID: member.id});
    const lvl = await nivel.findOne({user: member.id})
    const calculator = lvl.level * 100
    let monedas = eco.banco
    let coins = (monedas) => String(monedas).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    
    let ui = new MessageEmbed()
    .setAuthor(`${member.tag}`, `${member.avatarURL({dynamic: true}) }`)
    .setTitle(`Perfil general`)
    .setDescription(`<:superidol:942188882114543646> **Nivel:** ${lvl.level}\n<:exp:960234903247663104> **Exp:** ${lvl.exp}/${calculator} \n\n🪙 **Monedero:** ${coins(monedas)}`)
    .addField(`Insignias`, `null`, true)
    .addField(`Cripto monedas`, `<:bitcoin:954885018260484096> **Bitcoins:** ${eco.bitcoin}\n<:ethereum:954884980230721546> **Etherium:** null`, true)
    .addField(`Registros`, `Usuario creado: ${member.createdAt.toDateString()}\n Se unio: ${message.guild.members.resolve(member.id).joinedAt.toDateString()}`, false)
    message.channel.send({embeds: [ui]})
  }
}