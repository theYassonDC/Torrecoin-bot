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
      }, 900000)


    
    
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


        await economia.findOneAndUpdate({userID: message.author.id}, {gold: mineral + Number(coinFlip)})

       message.channel.send("> **Mineria v0.1**").then(m =>{
         setTimeout(()=> {m.edit("**[Cargando..]**")}, 3000)
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%5]**")}, 4000)
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%45]**")}, 5000)
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%75]**")}, 6000)
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%79]**")}, 7000)
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%90]**")}, 8000)
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//%100]**")}, 9000)
         setTimeout(()=> {m.edit("**[$%&%$/&&%/%&/57//_//COMPLETE_MINER.torreCoin]**")}, 10000)
         setTimeout(() => {m.delete()}, 11000)
         setTimeout(()=> {message.channel.send(`**Oro minado \`${coinFlip}\`<:Gold:915760542579310592> con exito!**`)}, 12000)
       })

  }
}