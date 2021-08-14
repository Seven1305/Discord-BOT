module.exports = {
    name: 'ban',
    aliases: [],
    description: "Comando ban",
    async execute (client, message, cmd, args, Discord) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Ragione non specificata";

        const embed = new Discord.MessageEmbed()
        .setTitle(`Sei stato bannato da **${message.guild.name}**`)
        .setDescription(`Motivo: ${reason}`)
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Nessun utente specificato");

        if(!mentionMember) return message.channel.send("Utente non valido!");

        if(!mentionMember.bannable) return message.channel.send("Impossibile bannare il membro");

        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Bannato con successo l'utente: " + mentionMember.user.tag));
        
    }
}