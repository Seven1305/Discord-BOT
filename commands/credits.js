const Discord = require('discord.js')

module.exports = {
    name: 'credits',
    aliases: ['cancella'],
    description: "Comando aiuto",
    async execute(client, message, cmd, args) {

        const wr = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle('CREDITS FOR CREATION OF CerberusBOT!')
        .setDescription('Seven, Realcosis')

        message.channel.send(wr)
        
    }
}