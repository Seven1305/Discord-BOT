module.exports = {
  name: 'id',
  aliases: ['getID'],
  description: "Comando get id",
  async execute (client, message, cmd, args, Discord) {

    const target = message.mentions.users.first() || message.author

    message.channel.send(target.id);
  }
}
