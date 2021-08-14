module.exports= {
    name: 'dm',
    aliases: [],
    description: 'Invia il messaggio in dm a una persona',
    async execute(client, message, cmd, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");
        let dm = args.slice(1).join(" ");
        let target = message.mentions.users.first();

        if(!target) return message.channel.send("Indica l'obbiettivo del dm");
        if(!dm) return message.channel.send("Che messaggio devo mandare??")

        target.send(`${dm} \n\nLo staff non può leggere le risposte che invii a me, quindi non ha senso rispondere qui`);
        message.channel.send(`${message.author} Ha inviato con successo un messaggio a ${target}:\n${dm}`)

    }
}