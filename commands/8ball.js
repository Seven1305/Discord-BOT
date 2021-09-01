module.exports = {
    name: "8ball",
    aliases: ['8b'],
    description: "8ball command",
    async execute (client, message, cmd, args, Discord) {
        if(!args[0]) return message.reply('Non mi hai chiesto niente 😒!')
        let risposte = ["SI.", "NO.", "Meglio se non ti rispondo", "Non saprei cosa risponderti", "Meglio non dirtelo ora.", "Impossibile", "Non posso fare previsioni ora. o forse non voglio 👀", "Non lo so.", "Penso di sì.", "Penso di no", "purtroppo sì...", "purtroppo no...", "forse!", "chiedi ancora.. dopo.."];
        
        let result = Math.floor((Math.random() * risposte.length));
        let question = args.slice().join(" ");

        let embed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#1C1C1C")
        .addField("Domanda:", question)
        .addField("Risposta", risposte[result])

        message.channel.send(embed)
    }
}
