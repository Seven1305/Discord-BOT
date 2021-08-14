const Discord = require('discord.js')

module.exports = {
    name: 'bs',
    description: "INFO BS",
    async execute(client, message, cmd, args) {

        const bs = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle('ECCOTI LE INFO PER BS!')
        .addFields({
            name: 'DOMANDE',
            value: 'Per qualsiasi domanda non che non rientra tra quelle sotto contatta un `Community Manager BS`',
        },
        {
            name: 'TORNEI',
            value: 'Per info sui tornei tagga un `GEST | TORNEI BS` nelle chat <#771336560938319872>'
        })

        message.channel.send(bs)
        
    }
}
