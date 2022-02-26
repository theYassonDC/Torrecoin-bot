const economia = require(`../../Shema/economia-shema`)
const { MessageEmbed, MessageActionRow, MessageButton, ButtonInteraction } = require('discord.js');
const cooldown = new Set();

module.exports = {
  name: "minar",
  alias: ["mine", "mn"],
  async execute(client, message, args) {
    if (cooldown.has(message.author.id)) {
      message.reply("⏰ | **Hey espera unos `1 hora` para volver a minar!!**")
      return;
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 2000)

    const data = await economia.findOne({ userID: message.author.id })
    if (!data) {
      let datosnuevos = new economia({
        userID: message.author.id,
        monedas: 0,
        Diamond: 0,
        gold: 0
      })
      await datosnuevos.save()
      return message.reply("Datos guardados!!, usa el comando nuevamente")
    }
  const row = new MessageActionRow()
			.addComponents(
			  new MessageButton()
				.setCustomId('play_mine')
        .setEmoji(`⛏`)
        .setLabel(`Start mine`)
        .setStyle(`SECONDARY`),
  	);

    const mineral = data.gold
    const coinFlip = Math.floor(Math.random() * 130 / 2) + 6



    const m = await message.channel.send({ content: `
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▯▯▯▯▯▯▯]
☉ DCRAM:[▯▯▯▯▯▯▯]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> welcome console.torrecoin!
\`\`\``, components: [row]})
    let ifilter = i => i.user.id === message.author.id
    const collector = m.createMessageComponentCollector({filter: ifilter, time: 7000})
    collector.on("collect", async i=>{
      if(i.customId === "play_mine"){
        await i.deferUpdate()
        i.editReply({ content: `
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▯▯▯▯▯]
☉ DCRAM:[▯▯▯▯▯▯▯]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> load.....
\`\`\``}).then(m=>{
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▯▯▯]
☉ DCRAM:[▮▮▯▯▯▯▯]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> (/%%%%%///))//{find.object.object.blockchain.database.global.enums(__numberFile&&%&%%&/.set).for/.jar
\`\`\``)},2300)
          
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▯▯▯▯▯]
☉ DCRAM:[▮▮▮▮▮▯▯]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | globalDatabase//_/calculator/%3343$34343434343%3434340000.8$23232/5454545.calculation...\n[BlockChain.torrecoin] | problem.passTimeout: 23232%54454454__&&454545/34343443434*454656+348305+?565675654¿_&%?3544545.(set{caltulationfor.DCPU%70})
\`\`\``)},4300)
          
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▮▮▯]
☉ DCRAM:[▮▮▮▯▯▯▯]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | globalDatabase//_/calculator/%3343$34343434343%3434340000.8$23232/5454545.calculation...\n[BlockChain.torrecoin] | problem.passTimeout: 23232%54454454__&&454545/34343443434*454656+348305+?565675654¿_&%?3544545.(set{caltulationfor.DCPU%70})
[DCPU.calculator] | pasterInt{4⍻6766%&5767676767____67∛76∛36378983$5656*3454545+6767∑4575989897670110101010100110101||||20302320392302301010101010110.%20000/7}
\`\`\``)},5300)
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▮▯▯]
☉ DCRAM:[▮▮▮▮▮▮▮]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | globalDatabase//_/calculator/%3343$34343434343%3434340000.8$23232/5454545.calculation...\n[BlockChain.torrecoin] | problem.passTimeout: 23232%54454454__&&454545/34343443434*454656+348305+?565675654¿_&%?3544545.(set{caltulationfor.DCPU%70})
[DCPU.calculator] | pasterInt{4⍻6766%&5767676767____67∛76∛36378983$5656*3454545+6767∑4575989897670110101010100110101||||20302320392302301010101010110.%20000/7}
[BlockMine] | WwVfjDshW2ANtkKpiFf9j0R%343434*0193645 / 3454/o"9'qUZr"1ow>fsA;dqNg3Fnld9[m[
\`\`\``)},6500)
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▮▯▯]
☉ DCRAM:[▮▮▮▮▮▮▮]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | globalDatabase//_/calculator/%3343$34343434343%3434340000.8$23232/5454545.calculation...\n[BlockChain.torrecoin] | problem.passTimeout: 23232%54454454__&&454545/34343443434*454656+348305+?565675654¿_&%?3544545.(set{caltulationfor.DCPU%70})
[DCPU.calculator] | setnewCalculator: -|#54656/4556454%4$2323*´?¿09955675¬¬sdsdss~SRRSredrsd(coinFlip.setMine)
[BlockMine] | WwVfjDshW2ANtkKpiFf9j0R%343434*0193645 / 3454/o"9'qUZr"1ow>fsA;dqNg3Fnld9[m[
[BlockMine] | %&%&%;vTbV{IY|R:tCIj"[Nl1S3keekAgLfz8;;;;_mi&34340*21.{3434as+¨¨sds~ser$56565056565/667676*901011010~}
\`\`\``)},7500)    
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▮▮▯]
☉ DCRAM:[▮▮▮▮▮▯▯]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | null, null , null (35575465683658457456740010101101011010101101010110.,,kk,kj,kl,kit5uhy*}}´p9ye6ifg#$#$$#%$54&&&$%%%%%//('¿'´'')(777)).this{invNull}
[DCPU.calculator] | setnewCalculator: -|#54656/4556454%4$2323*´?¿09955675¬¬sdsdss~SRRSredrsd(coinFlip.setMine)
[BlockMine] | WwVfjDshW2ANtkKpiFf9j0R%343434*0193645 / 3454/o"9'qUZr"1ow>fsA;dqNg3Fnld9[m[
[BlockMine] | %&%&%;vTbV{IY|R:tCIj"[Nl1S3ke%%%%mi&34340*21.{3434as+¨¨sds~ser$56565056565/667676*901011010~}
\`\`\``)},8500)
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▮▮▮]
☉ DCRAM:[▮▮▮▮▮▮▮]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | null, (35575465683658457456740010101101011010101101010110.,,kk,kj,kl,kit5uhy*}}´p9ye6ifg#$#$$#%$54&&&$%%%%%//('¿'´'')(777)).this{invNull}
[DCPU.calculator] | setnewCalculator: -|#54656/4556454%4$2323*´?¿09955675¬¬sdsdss~SRRSredrsd(coinFlip.setMine)
[BlockMine] | WwVfjDshW2ANtkKpiFf9j0R%343434*0193645 / 3454/o"9'qUZr"1ow>fsA;dqNg3Fnld9[m[
[BlockMine] | white
[BlockMine] | white
[BlockMine] | white
\`\`\``)},8500)   
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▯▯▯]
☉ DCRAM:[▮▮▮▮▮▮▮] [!]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | null, (35575465683658457456740010101101011010101101010110.,,kk,kj,kl,kit5uhy*}}´p9ye6ifg#$#$$#%$54&&&$%%%%%//('¿'´'')(777)).this{invNull}
[BloackMine] | N45644354%$%4556565_7878//(/(/65/((&/(&868%%%%%$_${coinFlip}"))))).true.mine¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡
\`\`\``)},9500)   
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▮▮▯▯▯]
☉ DCRAM:[▮▮▮▮▮▮▮] [!]
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | null, (3567400101011010110110.,,kk,kj,kl}}´p9ye6ifg#$#$$#????????????????????????????????????%$54&&&$%%%%%//('¿'´'')(777)).this{invNull}
[BloackMine] | N45644354%$%4556565_7878//(/(/65/((&/(&868%%%%%$_${coinFlip}"))))).true.mine¡¡¡¡¡¡¡?¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡
[LoadScript] | Module.exports = {BloackMine.set_5665756y675675675%%%%%%$_$,,,.,,}: >>.;:;???_??????????????????1011010101101010101101010110010liuy79<<
\`\`\``)},10500)  
   setTimeout(async ()=>{await economia.findOneAndUpdate({userID: message.author.id}, {gold: mineral + Number(coinFlip)})}, 11500)
   setTimeout(() => {m.edit(`
**Torrecoin Miner v0.3**\n> \`👤 \`- **User miner:** ${message.author.tag}\n> \`📊 \`- **Stats gold:** ${data.gold}\n**\`Files_Blockchaindatabase.collectionsglobalsCMS.torrecoin\`:**  
\`\`\`
═════════════════════════
☉ DCPU: [▮▮▯▯▯▯▯]
☉ DCRAM:[▮▯▯▯▯▯▯] 
═════════════════════════

C:/${message.author.username}/torrecoin/miner> 
[BlockChain.torrecoin] | Wround!!!!
[BloackMine] | r.true
[LoadScript] | MineResults: %&%&%&%%%%%%%%&________ins:${coinFlip}__456$%$&$%&$&%$&$%&$$55758754%$
\`\`\``)},12500)  
})   
      }
    })
    
  }
}