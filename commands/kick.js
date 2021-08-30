module.exports = {
    name: 'kick',
    aliases: [],
    description: "Comando kick",
    async execute (client, message, cmd, args, Discord) {
        const chat = client.channels.cache.get('692050320473194536') // Da inserire l'id della chat "WARN BAN"
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Motivo non specificato";

        const embed = new Discord.MessageEmbed()
        .setTitle(`Sei stato cacciato da **${message.guild.name}**`)
        .setDescription(`Motivo: ${reason}`)
        .setColor("#ff4d00")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        const KICK_EMBED = new Discord.MessageEmbed()
        .setTitle(`${mentionMember} è stato punito`)
        .setDescription(`Utente:${mentionMember}\nTipo: KICK\nMotivo:${reason}`)
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Nessun utente specificato");

        if(!mentionMember) return message.channel.send("Utente non valido");

        if(!mentionMember.kickable) return message.channel.send("Impossibile cacciare l'utente!");


        try {
            await mentionMember.send(embed);
        } catch (err) {

        }

        try {
            await mentionMember.kick({
                reason: reason
            }).then(() => chat.send(KICK_EMBED))
        } catch (err) {
        }

        
        
    }
}