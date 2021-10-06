module.exports = {
    name: 'etero',
    aliases: ['quantoEtero'],
    description: "Comando aiuto",
    async execute (client, message, cmd, args, Discord) {

      let target = message.mentions.users.first() || message.author

      let rng = Math.floor(Math.random() * 101);

      const random = new Discord.MessageEmbed()
      .setTitle(`Calcolatore di eteroseussualità`)
      .setDescription(`**${target} è etero al:** \`${rng} %\``)
      .setColor("BLACK")
      
      message.channel.send(random);
    }
}
