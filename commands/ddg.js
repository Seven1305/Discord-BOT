module.exports= {
    name: 'ddg',
    aliases: [],
    description: 'Domanda del giorno',
    async execute(client, message, cmd, args){
        const chat = client.channels.cache.get(`846445873914183721`)

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");
        let domanda = args.slice().join(" ");
        if(!domanda) return message.channel.send("Inserisci la domanda del giorno")

        chat.send(`__Domanda del Giorno__\n\n**${domanda}**\n\n<@&658022651867955220> rispondete in <#542788062153932800>`);

    }
}