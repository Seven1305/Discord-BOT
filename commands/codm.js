const Discord = require('discord.js')

module.exports = {
    name: "codm",
    description: "INFO CODM",
    async execute (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle('ECCOTI LE INFO PER CODM!`')
        .addFields({
            name: 'DOMANDE',
            value: 'Per qualsiasi domanda non che non rientra tra quelle sotto contatta in privato un `Community Manager CODM`',
        },
        {
            name: 'TORNEI',
            value: 'Per info sui tornei tagga un `GEST | TORNEI CODM` nelle chat apposite per i tornei (le trovi sotto alla categoria codm)',
        },
        {
            name: 'PROVINO',
            value: 'Per richiedere il provino apri un ticket in <#822816687975301120>\n RICORDIAMO CHE IL PROVINO E\' INERENTE ALLA PARTE COMPETITIVE E NON FOR FUN',
        },
        {
            name: 'SCRIM',
            value: 'Per richiedere una scrim taggate un `RESP | SCRIM` nella chat <#799721640589787147> specificando che team siete, le regole, il giorno e l\'ora',
        },)

        message.channel.send(embed)
    }
}
