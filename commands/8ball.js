module.exports = {
    name: "8ball",
    aliases: ['8b'],
    description: "8ball command",
    async execute (client, message, cmd, args, Discord) {
        if(!args[0]) return message.reply('Non mi hai chiesto niente 😒!')
        let risposte = ["sì.", "sembra buono.", "sì", "certo.", "Sì, sicuramente.", "NO.", "Meglio non dirtelo ora.", "nah", "mai", "Non posso fare previsioni ora. o forse non ho voglia 👀", "Non lo so.", "Non lo so *ancora*...", "Non è un caso.", "Penso di sì.", "Solo per oggi!", "Non per oggi", "purtroppo sì..", "purtroppo no..", "forse!", "chiedi ancora.. dopo.."];
        
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
