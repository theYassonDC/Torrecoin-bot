const fs = require("fs");

module.exports = (client, discord) => {
      console.log("----------[ Torrecoin - Commands ]----------")
    fs.readdirSync("./Commands/").forEach((dir)  => {
        const commands = fs
        .readdirSync(`./Commands/${dir}`)
        .filter((file) => file.endsWith(".js"))

        for (const file of commands){
            const cmd = require(`../Commands/${dir}/${file}`)
            if(cmd.name){
                client.commands.set(cmd.name, cmd)
            } else {
                console.log(`Error de comando: ${cmd.name}`)
            }
        }
    })
        console.log("--------------------------------------------------")  
}

