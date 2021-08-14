module.exports = {
    name: 'kick',
    aliases: [],
    description: "Comando kick",
    async execute (client, message, cmd, args, Discord) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Ragione non specificata";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`Sei stato cacciato da **${message.guild.name}**`)
        .setDescription(`Motivo: ${reason}`)
        .setColor("#ff4d00")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Nessun utente specificato");

        if(!mentionMember) return message.channel.send("Utente non valido");

        if(!mentionMember.kickable) return message.channel.send("Impossibile cacciare l'utente!");


        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("I was unabe to kick this user! Sorry...")
        }
        
    }
}