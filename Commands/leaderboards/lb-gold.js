const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "leaderboard-gold",
  alias: ["lb-gold"],
  async execute(client, message, args){
    const data =  await economia.find({__:0})


    const embed = new MessageEmbed().setTitle(`leaderboard - Gold`).setColor(`YELLOW`)
    const nums = data.sort((a,b)=>{
      return b.gold - a.gold
    })

    let miembro = nums.filter(function isBigEnough(value){
      return value.gold > 1
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
      let bal = new_members[i].gold
      let conv = (bal) => String(bal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      list += `> \`${i+1}\`. <@!${user}> **-** <:Gold:915760542579310592>${conv(bal)}\n`
    }
    embed.setDescription(list)
    message.reply({embeds:[embed]})


    
  }
}