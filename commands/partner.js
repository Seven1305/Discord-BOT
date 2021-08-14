const Discord = require('discord.js')

module.exports = {
    name: 'partner',
    description: "INFO PARTNERSHIP",
    async execute(client, message, cmd, args) {

        const partner = new Discord.MessageEmbed()
        .setColor("PURLE")
        .setTitle('Vuoi fare una partnership con noi??')
        .setDescription('Leggi le info nella chat <#757178757072289813>')
        .setFooter('📌 Ricordiamo che non possiamo fare partner con server sotto ai 500 membri')

        message.channel.send(partner)
        
    }
}
