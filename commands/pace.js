const Discord = require('discord.js')

module.exports = {
    name: 'Kill',
    aliases: ['attack'],
    description: "EsterEgg command",
    async execute(client, message, cmd, args) {

        const target = message.mentions.users.first()

        if(!target) return message.channel.send('Specifica con chi vuoi fare pace')

        message.channel.send(`${message.member} ha fatto pace con ${target}`);
        
    }
}