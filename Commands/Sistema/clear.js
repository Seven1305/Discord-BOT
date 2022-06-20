const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "clear",
    description: "clear command",
    permission: "MANAGE_MESSAGES",
    options: [
        {
            name: "amount",
            description: "Scegli il numero di messaggi da cancellare del un canale, o di un utente specifico",
            type: "NUMBER",
            required: true,
        },
        {
            name: "target",
            description: "Opzionale: Scegli l'utente del quale vuoi cancellare i messaggi",
            type: "USER",
            required: false,
        }
    ],

    /**
     * @param {CommandInteraction} interaction 
    */

    async execute(interaction){
        
        const { channel, options } = interaction;

        const Amount = options.getNumber("amount");
        const Target = options.getMember("target");
        const Messages = await channel.messages.fetch();

        if(Amount > 100) return interaction.reply({content: "Puoi cancellare al massimo 100 messaggi", ephemeral: true});

        const Response = new MessageEmbed()

        if(Target) {
            let i = 0
            const filtered = [];
            (await Messages).filter((m) => {
                if(m.author.id === Target.id && Amount > i) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messages => {
                Response.setDescription(`Cancellati \`${messages.size}\` messaggi da ${Target}.`);
                interaction.reply({embeds: [Response]});
            })
        } else {
            await channel.bulkDelete(Amount, true).then(messages =>{
                Response.setDescription(`Cancellati \`${messages.size}\` messaggi.`);
                interaction.reply({embeds: [Response]});
            })
        }


    }
}