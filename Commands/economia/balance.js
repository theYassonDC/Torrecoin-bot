const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
  name: "balance",
  alias: ["bal", "dinero"],
  async execute(client, message, args) {
    const member = message.mentions.users.first() || message.author
    let datos = await economia.findOne({ userID: member.id })
    if (!datos) {
      const newdata = new economia({
        userID: user.id,
        monedas: 0,
        diamond: 0,
        gold: 0,
        bitcoin: 0,
        banco: 0
      })
      await newdata.save()
    }
    let monedastl = datos.monedas
    let diamondtl = datos.diamond
    let goldtl = datos.gold
    let tarjetatl = datos.banco
    let bitcointl = datos.bitcoin

    let conv = (monedastl) => String(monedastl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let conv2 = (goldtl) => String(goldtl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let conv3 = (diamondtl) => String(diamondtl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let conv4 = (tarjetatl) => String(tarjetatl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let conv5 = (bitcointl) => String(bitcointl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    
    const UI = new MessageEmbed()
      .setAuthor(`Balance global ${member.tag}`,`${member.avatarURL({dynamic: true}) }`)
      .addField("Monedero", `<:moneda:909696267821658112> - **${conv(monedastl)}**\n<:gem:909703076225646593> - **${conv2(diamondtl)}**`, true)
      .addField("Minerales", `<:Gold:915760542579310592> - **${conv3(goldtl)}**\n<:bitcoin:954885018260484096> - **${conv5(bitcointl)}**`, true)
      .addField("Tarjetas", `💰 **Banco: ** \`${conv4(tarjetatl)}/130,000\``)
      .setColor("#00c3ff")
    message.reply({ embeds: [UI] })

  }
}