const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async execute (client, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle('Prefisso del bot: `^`')
        .setAuthor('LISTA COMANDI', message.author.displayAvatarURL())
        .addFields({
            name: 'INFO',
            value: '`codm`丨`bs`丨`apex`丨`wr`丨`partner`',
        },
        {
            name: 'UTILITA\'',
            value: '`avatar`',
        },
        {
            name: 'ÉLITE',
            value: '`punti`丨`***`丨`***`',
        },
        {
            name: 'FUN',
            value: '`8ball`丨`gay`丨`etero`丨`joke`',
        },
        {
            name: 'MODERAZIONE',
            value: '`ban`丨`kick`丨`clear`丨`***`丨`***`',
        },{
            name: 'IN ARRIVO!!',
            value: '`MUSICA!!`丨`WARN`丨`DICE`'
        },)

        message.channel.send(help)
    }
}
