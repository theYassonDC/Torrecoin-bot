const adm = require(`../../Shema/rank`);

module.exports = {
   name: "delete-administrador",
  alias: ["del-adm"],
  async execute(client, message, args){
    if(message.author.id !==`676888464351821867`) return message.reply("Este comando no esta permitido solo lo puede usar el owner!!")
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])  
    const data = await adm.findOne({user: member.id})
    if(!data) return message.channel.send("No se encuentra en base de datos")
    if(data){
      await data.delete()
      return message.channel.send(`Se removio al usuario ${member} de administradores`)
    }
    
  }
}