const fs = require("fs");

module.exports = (client, discord) => {

    fs.readdirSync("./events/").forEach((dir) => {
        const events = fs
            .readdirSync(`./events/${dir}`)
            .filter((file) => file.endsWith(".js"));
        for(const file of events){
    const event = require(`../events/${dir}/${file}`)
    client.on(event.name, (...args) => event.run(client, ...args));
  }
    });

};