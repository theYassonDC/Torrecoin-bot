const testers = require(`../../Shema/tester`);
const adm = require(`../../Shema/rank`);

module.exports = {
   name: "add-tester",
  alias: ["add-testiador", "give-tester"],
  async execute(client, message, args){
    const rol = message.guild.roles.cache.find(role => role.id === `915770314326179880`)
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")  
  const member = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply(`Que usuario quieres agregar a la lista de testiadores?`)
      const data = await testers.findOne({user: member.id})
      if(!data){
          let datosnuevos = new testers({
            user: member.id,
            target: member.tag
          })
          await datosnuevos.save()
          await message.guild.members.cache.get(member.id).roles.add(rol)
      }
    message.reply(`Se agrego a la lista de testiadores el usuario ${member}!`)
  }
}