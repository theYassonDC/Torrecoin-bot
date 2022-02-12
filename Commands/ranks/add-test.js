const testers = require(`../../Shema/tester`);
const adm = require(`../../Shema/rank`);

module.exports = {
   name: "add-tester",
  alias: ["add-testiador", "give-tester"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id})
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")  
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply(`Que usuario quieres agregar a la lista de testiadores?`)
      const data = await testers.findOne({user: member.id})
      if(!data){
          let datosnuevos = new testers({
              user: member.id
          })
          await datosnuevos.save()
          return message.reply(`Se agrego a la lista de testiadores el usuario ${member}!`)
      }
  }
}