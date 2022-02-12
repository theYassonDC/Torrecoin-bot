const tester = require(`../../Shema/tester`);
const adm = require(`../../Shema/rank`);
module.exports = {
   name: "delete-tester",
  alias: ["del-testiador", "remove-tester"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**") 
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])  
    const data = await tester.findOne({user: member.id})
    if(!data) return message.channel.send("No se encuentra este usuario en lista.")
    if(!data.user) return message.channel.send(`El usuario ${member} no es tester`)
    if(data){
      await data.delete()
      return message.channel.send(`Se removio al usuario ${member} de testiadores de Torrecoin`)
    }
    
  }
}