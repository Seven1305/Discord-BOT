module.exports = {
    name: 'ban',
    aliases: [],
    description: "Comando ban",
    async execute (client, message, cmd, args, Discord) {
        const chat = client.channels.cache.get('890971001385537546') // Da inserire l'id della chat "WARN BAN"
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Motivo non specificato";

        const embed = new Discord.MessageEmbed()
        .setTitle(`Sei stato bannato da **${message.guild.name}**`)
        .setDescription(`Motivo: ${reason}`)
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        const BAN_EMBED = new Discord.MessageEmbed()
        .setTitle(`${mentionMember.tag} è stato punito`)
        .setDescription(`Utente:${mentionMember}\nTipo: BAN\nMotivo: ${reason}`)
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Nessun utente specificato");

        if(!mentionMember) return message.channel.send("Utente non valido!");

        if(!mentionMember.bannable) return message.channel.send("Impossibile bannare il membro");

        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => chat.send(BAN_EMBED))

    }
}