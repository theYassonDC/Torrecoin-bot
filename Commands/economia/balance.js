const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
  name: "balance",
  alias: ["bal", "dinero"],
  rank: true,
  async execute(client, message, args) {
    const member = message.mentions.users.first() || message.author
    let datos = await economia.findOne({ userID: member.id })
    if (!datos) {
      const newdata = new economia({
        userID: user.id,
        monedas: 0,
        diamond: 0,
        gold: 0,
        banco: 0
      })
      await newdata.save()
    }
    let monedastl = datos.monedas
    let diamondtl = datos.diamond
    let goldtl = datos.gold
    let tarjetatl = datos.banco
    
    let conv = (monedastl) => String(monedastl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let conv2 = (goldtl) => String(goldtl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let conv3 = (diamondtl) => String(diamondtl).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    
    const UI = new MessageEmbed()
      .setTitle(`Monedero`)
      .setAuthor(`Balance global ${member.tag}`)
      .addField("Monedero", `<:moneda:909696267821658112> - **${conv(monedastl)}**\n<:gem:909703076225646593> - **${conv2(diamondtl)}**`, true)
      .addField("Minerales", `<:Gold:915760542579310592> - **${conv3(goldtl)}**`, true)
      .addField("Tarjetas", `💰 **Banco: ** \`${tarjetatl}/130,000\``)
      .setColor("#00c3ff")
    message.reply({ embeds: [UI] })

  }
}