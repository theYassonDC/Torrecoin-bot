const { MessageEmbed } = require('discord.js');
const adm = require(`../../Shema/rank`);
const tester = require(`../../Shema/tester`);

module.exports = {
   name: "rangos",
  alias: ["ranks"],
  async execute(client, message, args){
  const member = message.guild.members.cache.get 
    const datos = await adm.find()
    const testers = await tester.find()

    const list = datos.map((va, ind)=>{
      return `\n> **\`${ind+1}\`** - <@!${va.user}>`
    }).slice(0, 20)
    
    const listTesters = testers.map((val, ind)=>{
      return `\n **\`${ind+1}\`** - <@!${val.user}>`
    }).slice(0, 20)
    const listaT = listTesters.join(" ")
    const listRank = list.join(" ")

    const ui = new MessageEmbed()
    .setTitle("Rangos Torrecoin")
    .setDescription(`Los rangos son datos que se guardan en una base de datos de lo cual en general se trata de guardar varios y hacer utiles a la hora de hacer un comando en general se tiene pensado 5 rangos en general.\n\n🟢**WS_Ping**: \`${client.ws.ping}\`\n
🗄️**Rangos almacenados en la base de datos:**`)
    .addField(`Administradores`, `${listRank}`|| `No hay usuarios en esta lista`)
    .addField(`Testers bot`, `${listaT}`|| `No hay usuarios en esta lista`)
    .addField(`Premium`, `undefined`)
    .addField(`Vip`, `undefined`)
    .setColor(`GREEN`)
    .setThumbnail(`https://media.discordapp.net/attachments/915768317212508180/934344757130436608/1503-moderator-badge.png`)

    message.reply({embeds:[ui]})
    
  }
}