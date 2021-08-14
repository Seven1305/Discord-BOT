const Discord = require('discord.js')

module.exports = {
    name: 'wr',
    description: "Comando aiuto",
    async execute(client, message, cmd, args) {

        const wr = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle('ECCOTI LE INFO PER WR!')
        .addFields({
            name: 'DOMANDE',
            value: 'Per qualsiasi domanda contatta in privato un `Community Manager WR`',
        })

        message.channel.send(wr)
        
    }
}
