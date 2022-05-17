# **Estructura CommandHandler**
```js
const { MessageEmbed } = require('discord.js');
const economia = require(`../../Shema/economia-shema`)
const adm = require(`../../Shema/rank`)

module.exports = {
   name: "",
  alias: [""],
  execute(client, message, args){
    
  }
}
```



# **Estructura EventHandler**
```js
module.exports = {
  name:
  run(client){
  
  }
}
```

# **Estructura Schema**
```js
const { Schema, model} = require("mongoose");
const nombre = new Schema({
})

module.exports = model(``,)
```