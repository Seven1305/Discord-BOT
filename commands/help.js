const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async execute (client, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle('Prefisso del bot: `..`')
        .setAuthor('LISTA COMANDI', message.author.displayAvatarURL())
        .addFields({
            name: 'UTILITA\'',
            value: '`avatar`',
        },
        {
            name: 'ÉLITE',
            value: '`TEMPORANEAMENTE DISABILITATI`',
        },
        {
            name: 'FUN',
            value: '`8ball`丨`gay`丨`etero`丨`joke`',
        },
        {
            name: 'MODERAZIONE',
            value: '`ban`丨`kick`丨`clear`丨`ALTRI IN ARRIVO`',
        },{
            name: 'IN SPERIMENTAZIONE!!',
            value: '`MUSICA!!`丨`WARN`丨`TICKETS`丨`MEME`'
        },)

        message.channel.send(help)
    }
}
