const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/shop`);
const adm = require(`../../Shema/rank`);



module.exports = {
   name: "delete-item",
  alias: ["del-item","remove-item"],
  async execute(client, message, args){
    const administrador = await adm.findOne({user: message.author.id}) 
    if(!administrador) return message.reply("<:modBag:915764671204692008> | **No eres administrador para usar este comando**")
    
    const item = String(args[0]) || Number(args[0])
    const data = await economia.findOne({producto: item}) || await economia.findOne({id: item})
    if(!args[0]) return message.reply(`Escribe un item que quieras eliminar.`)
    
    if(!data.producto) return message.channel.send("No se encuentra en la base de datos")
    if(data){
      await data.delete()
      return message.channel.send(`Se removio el item llamado ${data.producto}`)
    }
  }
}