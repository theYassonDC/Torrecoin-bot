module.exports = async (client) => {
    const states = ['En programacion..', `Economy developing..`]
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: states[Math.floor(Math.random() * states.length)],
                type: 'PLAYING'
            },
            status: 'dnd'
        })
    }, 7e4)
    console.log(`[INFO]   Bot conectado exitosamente! ${client.user.tag}`);
}