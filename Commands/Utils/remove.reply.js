const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`);
const reply = require(`../../Shema/replys`);

module.exports = {
   name: "del-reply",
  alias: ["remove-reply", "eliminar-reply", "eliminar-mensaje"],
  rank: true,
  async execute(client, message, args){
    try{
    let val = args[0];

    
    const db = await reply.findOne({id: val});

    //Validaciones
    if(!val) return message.reply(`Error | **Que reply quieres eliminar?**\nPara eliminar un reply debes escribir \`$remove-reply (id)\`.`);
    if(!db) return message.reply(`[!] | **No se encuentra este reply en la lista!**`)
    
    // Eliminar reply
    if(db){
      await db.delete();
      return message.reply(`Se elimino correctamente el reply con el id ${val}`)
    }
      
    }catch(err){
      message.reply('[!] | Error del valor usa un id correcto')
    }
  }
}