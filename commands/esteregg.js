const Discord = require('discord.js')

module.exports = {
    name: 'esteregg',
    aliases: ['ee'],
    description: "EsterEgg command",
    async execute(client, message, cmd, args) {

        const wr = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle('CACCIA AI EASTER EGG!')
        .setDescription('Al bot stono stati integrati dei comandi segreti che non trovi usando il comando help, alcuni semplici come delle risposte, altri invece più complessi\nBuona ricerca 😊')

        message.channel.send(wr)
        
    }
}