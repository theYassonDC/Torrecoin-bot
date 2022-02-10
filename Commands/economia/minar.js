const economia = require(`../../Shema/economia-shema`)
const { MessageEmbed } = require('discord.js');
const cooldown = new Set();

module.exports = {
   name: "minar",
   alias: ["mine", "mn"],
  async execute(client, message, args){

    
      if(cooldown.has(message.author.id)){
        message.reply("⏰ | **Hey espera unos `1 hora` para volver a minar!!**")
        return;
      }
  
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, 90e5)


    
    
    const data = await economia.findOne({userID: message.author.id})
      if(!data){
          let datosnuevos = new economia({
              userID: message.author.id,
              monedas: 0,
              Diamond: 0,
              gold: 0
          })
        await datosnuevos.save()
        return message.reply("Datos guardados!!, usa el comando nuevamente")
      }
        

        const mineral = data.gold
        const coinFlip = Math.floor(Math.random() * 130) + 3

        const embed = new MessageEmbed()
        .setTitle(`Mineria Torrecoin`)
        .setDescription(`Preparando mineria`)

        await economia.findOneAndUpdate({userID: message.author.id}, {gold: mineral + Number(coinFlip)})

       message.reply({embeds: [embed]}).then(m =>{
         setTimeout(()=> {m.edit("**[Cargando..]**"), 13400})
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%5]**"), 14400})
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%45]**"), 15000})
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%75]**"), 16100})
         setTimeout(() => {m.delete()}, 17100)
         setTimeout(()=> {m.edit(`**Oro minado \`${coinFlip}\`<:Gold:915760542579310592> con exito!**`), 17500})
       })

  }
}