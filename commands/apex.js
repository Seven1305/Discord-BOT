const Discord = require('discord.js')

module.exports = {
    name: 'apex',
    description: "Comando aiuto",
    async execute(client, message, cmd, args) {

        const apex = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle('ECCOTI LE INFO PER APEX!')
        .addFields({
            name: 'DOMANDE',
            value: 'Per qualsiasi domanda non che non rientra tra quelle sotto contatta un `Community Manager APEX`',
        },
        {
            name: 'QUANDO SI FANNO LE SCRIM??',
            value: 'Attualmente le scrim vengono fatte di rado, si sta cercando un giorno e un\'orario in cui sono più o meno tutti disponibili per finire i game',
        })

        message.channel.send(apex)
    }
    
}  
