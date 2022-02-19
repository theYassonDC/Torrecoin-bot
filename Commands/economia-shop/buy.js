const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/shop`)
const inventory = require(`../../Shema/inventory`)
const eco = require(`../../Shema/economia-shema`)


module.exports = {
   name: "buyitem",
  alias: ["buyitems", "buy-item", "buy"],
  async execute(client, message, args){
    const money = await eco.findOne({userID: message.author.id})
    let buy = args[0]
try{
    const items = await economia.findOne({producto:buy}) ||  await economia.findOne({id: buy})
    
    if(!buy) return message.channel.send(`Que item quieres comprar de la tienda?`)
    const priceItem = items.precio
    let conv = (priceItem) => String(priceItem).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    const balance = money.monedas
      
    if(balance < priceItem) return message.reply(`No tienes la cantidad que se requiere para comprar el item cuesta ${priceItem}`)
    let params = {  
      server: message.guild.id,
      userID: message.author.id  
    }
    const db_inventory = inventory.findOne(params, async(err,data)=>{
      if(data){
        const addItem = Object.keys(data.item).includes(items.producto);
        if(!addItem){
          data.item[items.producto] = {
              name: items.producto,
              id: items.id,
              cantidad: 1
            }
          
        }else {
          const inventoryVal = Object.values(data.item)
          for(invVal of inventoryVal){
          data.item[items.producto] = {
            name: items.producto,
            id: items.id,
            cantidad: invVal.cantidad +1
          }
          }
        }
        await inventory.findOneAndUpdate(params, data)
        await eco.findOneAndUpdate({userID: message.author.id}, {monedas: balance - Number(priceItem)})       
      }else{
        new inventory({
          server: message.guild.id,
          userID: message.author.id,
          item: {
            [items.producto]: {
              name: items.producto,
              id: items.id,
              cantidad: 1
            }
          }
        }).save()
      }
      await eco.findOneAndUpdate({userID: message.author.id}, {monedas: balance - Number(priceItem)})
      message.reply(`Compraste el item llamado ${items.producto} por el valor de ${conv(priceItem)}`)
    })
  }catch(err){
    message.reply(`${buy} no esta o no existe en la tienda global \nPara buscar ver items disponibles escribe: \`$shop\` `)
  }
    
  }
}