const adm = require(`../../Shema/rank`);

module.exports = {
   name: "add-administrador",
  alias: ["add-adm"],
  async execute(client, message, args){
    if(message.author.id !==`676888464351821867`) return message.reply("Este comando no esta permitido solo lo puede usar el owner!!")    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply(`Que usuario quieres agregar?`)
      const data = await adm.findOne({user: member.id})
      if(!data){
          let datosnuevos = new adm({
              user: member.id
          })
          await datosnuevos.save()
          return message.reply(`Se agrego administradores el usuario ${member}`)
      }
  }
}