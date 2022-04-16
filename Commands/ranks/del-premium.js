const premium = require(`../../Shema/pre`);
const adm = require(`../../Shema/rank`);

module.exports = {
   name: "del-premium",
  alias: ["del-premium", "remove-premium"],
  admin: true,
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")  
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply(`Que usuario quieres agregar premium?`)
      const data = await premium.findOne({user: member.id})
    if(data){
      await data.delete()
      return message.channel.send(`Se removio al usuario premium ${member}`)
    }
  }
}