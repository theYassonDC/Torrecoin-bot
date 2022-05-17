const { MessageEmbed, MessageActionRow, MessageButton, MessageCollector } = require('discord.js');
const economia = require(`../../Shema/economia-shema`);
const reply = require(`../../Shema/replys`);

module.exports = {
   name: "list-reply",
  alias: ["replylist", "replys"],
  async execute(client, message, args){
    const replies = await reply.find();

    const row = new MessageActionRow()
			.addComponents(
				  new MessageButton()
					.setCustomId('izquierda')
          .setLabel("⬅️")
          .setStyle(`PRIMARY`),
         new MessageButton()
          .setCustomId(`derecha`)
          .setLabel("➡️")
          .setStyle(`PRIMARY`)
			);
    
    let lista = replies.map((val, ind)=>{
      return `\`${val.id}\` **Author:** <@${val.user}>\n**Mensaje:** \`\`\`${val.mensaje}\`\`\`\n`
    }).slice(0,10).join(" ");
    
    let lista2 = replies.map((val, ind)=>{
      return `\`${val.id}\` **Author:** <@${val.user}>\n**Mensaje:** \`\`\`${val.mensaje}\`\`\`\n`
    }).slice(10,20).join(" ");
    
    if(replies.length > 10){
      const embedlist = new MessageEmbed()
      .setTitle(`Lista de mensajes work`)
      .setDescription(`${lista2}`)
      .setColor("GREEN")
      .setFooter(`Page 2/2`)
      
      const embed = new MessageEmbed()
      .setTitle(`Lista de mensajes work`)
      .setDescription(`${lista}`)
      .setColor("GREEN")
      .setFooter(`Page 1/2`)
      
      const m = await message.reply({embeds: [embed], components: [row]})
      const collector =  m.createMessageComponentCollector({componentType: "BUTTON"})
      
      collector.on("collect", async i =>{
        if(i.customId === `derecha`){
          await i.deferUpdate()
          m.edit({embeds: [embedlist], components: [row]})
        }
      })
      collector.on("collect", async e =>{
        if(e.customId === `izquierda`){
          await e.deferUpdate()
          m.edit({embeds: [embed], components: [row]})
        }
      })
    }else {
      const embed2 = new MessageEmbed()
      .setTitle(`Lista de mensajes work`)
      .setDescription(`${lista}`)
      .setColor("GREEN")
      message.channel.send({embeds: [embed2]})
    }
  }
}