const premiums = require(`../../Shema/pre`);
const adm = require(`../../Shema/rank`);

module.exports = {
  name: "add-premium",
  alias: ["add-premium", "give-premium"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")  
    
  const member = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply(`Que usuario quieres agregar premium?`)
    const data = await premiums.findOne({user: member.id})
    if(!data){
        let datosnuevos = new premiums({
          user: member.id,
          tag: member.tag
        })
        await datosnuevos.save()
        return message.reply(`Nuevo usuario premium  ${member}!!`)
    }
  }
}