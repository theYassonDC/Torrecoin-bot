const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "del-gold",
  alias: ["del-gold", "remove-golds", "remove-gold"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) 
  if(!args[1]) return message.reply(`Menciona a un usuario`)    
    const eco = await economia.findOne({userID: member.id})
    let gold = eco.gold
    let added = Number(args[0])
    if(!added) return message.reply("Agrega la cantidad que quieres agregar de dinero")
    
    let conv3 = (gold) => String(gold).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    let conv2 = (added) => String(added).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    if(added > gold) return message.reply(`**El usuario ${member} solo tiene \`${conv3(gold)}\`**`)
    await economia.findOneAndUpdate({userID: member.id}, {gold: gold - Number(added)})

    const balance = new MessageEmbed()
    .setDescription(`El administrador ${message.author} elimino la cantidad de **${conv2(added)}** oro al usuario ${member}`)
    .setColor(`RED`)
    message.reply({embeds:[balance]})
  }
}