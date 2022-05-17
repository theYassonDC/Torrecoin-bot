const { MessageEmbed } = require('discord.js');
const reply = require(`../../Shema/replys`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "add-reply",
  alias: ["agregar-mensaje", "add-mensaje", "give-mensaje"],
  rank: true,
  async execute(client, message, args){
    const db = await reply.findOne({user: message.author.id})
    let replys = args.join(" ")
    if(!replys) return message.reply('Que mensaje quieres agregar recuerda escribir `${coinFlip}`!')
    const idRandom = Math.round(Math.random()*40+20)
    if(!db){
      let newdata = new reply({
        id: idRandom,
        user: message.author.id,
        mensaje:replys 
      })
      await newdata.save()
      return message.reply(`Se agrego a mensaje work con exito!\n> Mensaje agregado:\n> Mensaje ID: \`${idRandom}\`\n\`\`\`${replys}\`\`\``)
    }
    if(db){
      let newdata = new reply({
        id: idRandom,
        user: message.author.id,
        mensaje: replys
      })
      await newdata.save()
      return message.reply(`Se agrego a mensaje work con exito!\n> Mensaje agregado:\n> Mensaje ID: \`${idRandom}\`\n\`\`\`${replys}\`\`\``)
    }
  }
}