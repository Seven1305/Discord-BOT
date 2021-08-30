const Discord = require('discord.js')

module.exports = {
    name: 'Ciccio',
    description: "Comando ",
    async execute(client, message, cmd, args) {

        message.channel.send('Fanta!!');
        
    }
}