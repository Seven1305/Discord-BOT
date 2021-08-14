module.exports = {
    name: 'gay',
    aliases: ['quantoGay'],
    description: "Comando aiuto",
    async execute (client, message, cmd, args, Discord) {

      let target = message.mentions.users.first() || message.author

      let rng = Math.floor(Math.random() * 101);

      const random = new Discord.MessageEmbed()
      .setTitle(`Calcolatore di gay`)
      .setDescription(`**${target} è gay al:** \`${rng} %\``)
      .setColor("GREEN")
      
      message.channel.send(random);
    }
}
