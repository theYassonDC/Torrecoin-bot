module.exports = {
  name: "ready",
  async run(client){
  const activities = ["Developing..", "Listo para la gran beta", "Updates commands bugs", "En desarrollo | $help", "Economy bot"]
    setInterval(()=>{
      let status = activities[Math.floor(Math.random() * activities.length)]
      client.user.setPresence({activities: [{ name: `${status}` }]})
    }, 5030)
  }
  
}