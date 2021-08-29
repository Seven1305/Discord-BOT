module.exports = {
  name: 'id',
  aliases: ['getID'],
  description: "Comando get id",
  async execute (client, message, cmd, args, Discord) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Non hai i permessi per poterlo fare");
    const target = message.mentions.users.first() || message.author

    message.channel.send(target.id);
  }
}
