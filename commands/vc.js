// const Discord = require('discord.js')

// module.exports = {
//     name: 'vc',
//     aliases: ['join', 'leave'],
//     description: 'Comandi per le vocal',
//     async execute(client, message, cmd, args) {

//         if(cmd === 'vc'){
            
//             const vc = new Discord.Embed()
//             .setTile('🔊 Eccoti i comandi disponibili relativi alle voc 🔊')
//             .setDescription('join | leave | play | stop | skip')
//             .setColor('#6fff00')

//             message.channel.send(vc);

//         } else if(cmd === 'join'){
//             message.member.voice.channel.join();
//         } else if(cmd === 'leave'){
//             message.member.voice.channel.leave();
//         }
//     }
// }