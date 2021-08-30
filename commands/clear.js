//Sistemare il fatto che il numero di messaggi cancellati non è corrispondente a quello di input
//Il Bot cancella i messaggi contando anche il comando

module.exports = {
    name: "clear",
    aliases: ['cancella'],
    description: "Cancella i messaggi",
    async execute(client, message, cdm, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");
        if(!args[0]) return message.reply("Inserisci il numero di messaggi da cancellare");
        if(isNaN(args[0])) return message.reply("Inserisci un numero reale");
        if(args[0] < 1) return message.reply("Amessi solo numeri uguali o maggiori di 1");

        if(args[0] > 100) {
            args[0] = 100;
            
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                message.channel.send('```✋ Puoi elliminare al massimo 100 messaggi alla volta ✋```').then(message => {
                    message.delete({ timeout: 1000 })
                })
            });
        } else {
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                message.channel.send(`Elliminati con successo **__${args[0]}__** messaggi`).then(message => {
                    message.delete({ timeout: 1000 })
                })
            });
        }

    }
}
