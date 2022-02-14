const nivel = require('../../Shema/level')

module.exports = {
  name: 'messageCreate',
  async run(client, message){
    if(message.author.bot){
      return;
    }
    const level = await nivel.findOne({user: message.author.id}) 
    if(!level){
      let newUser = new nivel({
        user: message.author.id,
        guild: message.guild.id,
        exp: 0,
        level: 1
      })
      await newUser.save()
      return
    }
    await nivel.findOneAndUpdate({user: message.author.id}, {exp: level.exp +5})
    let niveliado = level.level
    const calculator = niveliado * 25
    if(level.exp >= calculator){
      await nivel.findOneAndUpdate({user: message.author.id}, {level: niveliado +1})
      await nivel.findOneAndUpdate({user: message.author.id},{exp: 0})
      message.channel.send(`Felicidades ${message.author} subiste a nivel ${niveliado+1}!!!`)
    }
    
  }
}
