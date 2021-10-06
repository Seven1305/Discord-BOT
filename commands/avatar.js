const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    aliases: ['pp'],
    description: "Ottieni l'avatar di un membro",
    async execute(client, message, cmd, args) {
        const member = message.mentions.members.first() || message.member;

        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.member, message.member.useer.displayAvatarURL())
            .setTitle(`Ecco l'avatar di: ${member.user.tag}`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 520 }))
            .setColor('BLACK')
            .setFooter(client.user.tag, client.user.displayAvatarURL())
        )
    }
}