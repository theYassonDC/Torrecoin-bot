const { MessageEmbed, MessageAttachment } = require('discord.js');
const nivel = require('../../Shema/level')
const canvacord = require('canvacord')
const Discord = require('discord.js')

module.exports = {
   name: "rank",
  alias: ["nivel"],
  async execute(client, message, args){
    const member = message.mentions.users.first() || message.author
    const data = await nivel.findOne({user: member.id})
    const calculator = data.level * 100
    if(!data) return message.reply(`No tienes nivel!`)
    let img = member.displayAvatarURL({dynamic: false,format: `png`})
    const rank = new canvacord.Rank()
    .setAvatar(img)
    .setCurrentXP(data.exp)
    .setRequiredXP(calculator)
    .setRank(1, `RANK`, false)
    .setLevel(data.level)
    .setProgressBar("#68ff83", "COLOR")
    .setBackground(`IMAGE`, 'https://media.discordapp.net/attachments/915768317212508180/946848272939618404/Captura_de_pantalla_2021-07-26_171217.png')
    .setOverlay("BLACK",0.7, true)
    .setUsername(`${member.username}`)
    .setDiscriminator(`${member.discriminator}`)
    rank.build().then(data => {
        const atta = new Discord.MessageAttachment(data, 'rank.png');
        message.channel.send({files: [atta] })
    });
  }
}