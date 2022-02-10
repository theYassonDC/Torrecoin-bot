const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "leaderboard-diamond",
  alias: ["lb-diamond"],
  async execute(client, message, args){
    const data =  await economia.find()

    const embed = new MessageEmbed().setTitle(`leaderboard - Diamonds`).setColor(`GREEN`)
    const nums = data.sort((a,b)=>{
      return b.diamond - a.diamond
    })

    let miembro = nums.filter(function isBigEnough(value){
      return value.diamond > 0
    })

    let pos = 0;
    for(obj of miembro){
      pos+1
      if(obj.userID == data.userID){
        embed.setFooter(`Estas en la posicion - #${pos}`)
      }
    }

    new_members = miembro.slice(0,10) 
    let list = ""

    for(let i=0; i < new_members.length; i++){
      let user = new_members[i].userID
      if(!user) return
      let bal = new_members[i].diamond
      let conv = (bal) => String(bal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      list += `> \`${i+1}\`. <@!${user}> **-** <:gem:909703076225646593>${conv(bal)}\n`
    }
    embed.setDescription(list)
    message.reply({embeds:[embed]})


    
  }
}