require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

const mongoose = require(`mongoose`)
mongoose.connect(process.env[`mongo`], {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log("[INFO]   Conectado a la data base JuandaADM"))
.catch(err => console.log(err))

client.once("ready", (bot) => {
    console.log("----------------------------------------------------------");
    console.log(`Bot: ${bot.user.username}\nStats ${bot.presence.status}`)
    console.log("--------------------------------------------------------Botn\n-----[Bot logs torrecoin]")
    console.log(`[INFO]   Bot conectado exitosamente! ${client.user.tag}`)
})


client.commands = new discord.Collection();
client.events = new discord.Collection();
["commandHandler", "eventshandler"].forEach((file) => {
    require(`./handlers/${file}`)(client, discord);
})

const mySecret = process.env['token']
client.login(mySecret);