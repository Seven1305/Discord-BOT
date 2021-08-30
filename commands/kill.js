const Discord = require('discord.js')

module.exports = {
    name: 'Kill',
    description: "EsterEgg command",
    async execute(client, message, cmd, args) {

        const target = message.mentions.users.first()

        if(!target) return message.channel.send('Chi vuoi uccidere?')

        if(target.id == '' ) return message.channel.send(`${message.member} questo utente è protetto da dio, non puoi ucciderlo`);

        var risposte = [
            `${message.member} ha provato ad uccidere ${target} con una granta ma ha fallito suicidandosi 😂😂`,
            `${message.member} ha voluto provare una 360 no scope su ${target} ma è morto di danno da caduta 🤣🤣`,
            `${message.member} ha fatto una 360 no scope a ${target} 😎`,
            `${message.member} ha ucciso ${target}, ma putroppo un mini zombi gli è spawnato dietro, rest i peace ${message.member}`,
            `${message.member} ha ucciso ${target} con un fumogeno 😎`
            `${message.member} ha provato ad uccidere ${target}, ma purtroppo lui si è suicidato prima che potesse farlo`
            `${message.member} ha ucciso ${target} con una banana 👀`
            `${message.member} ha investito ${target} con una moto`
            `${message.member} ha investito ${target} con una camion`
            `${message.member} vuoi davvero uccidere ${target} 😔`
            `${message.member} ha massacrato ${target}, e non essendo ancora soddifatto gli ha ucciso pure la famiglia`
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(risposte[Math.floor(Math.random() * risposte.length)])
        .setColor("RED")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())


        await message.channel.send(embed);
        
    }
}