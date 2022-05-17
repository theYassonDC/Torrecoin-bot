const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/shop`);
const adm = require(`../../Shema/rank`);



module.exports = {
   name: "delete-item",
  alias: ["del-item","remove-item"],
  rank: true,
  async execute(client, message, args){
    try{
      
    const item = String(args[0]) || Number(args[0])
    const data = await economia.findOne({id: item})
    if(!args[0]) return message.reply(`Escribe el id de un item que quieras eliminar.`)
    if(!data) return message.channel.send("No se encuentra en la base de datos")
    if(data){
      await data.delete()
      return message.channel.send(`Se removio el item llamado ${data.producto}`)
    }
  }catch(err){
      message.reply(`Comando invalido, para eliminar item escribe \`$remove-item (ITEM-ID)\` consulta los items escribiendo $shop `)
    }    
  }
}