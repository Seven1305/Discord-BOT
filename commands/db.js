const profileModel = require("../models/puntiElite");

module.exports = {
    name: 'db',
    aliases: [],
    descritpion: 'aggiunge un utente al database',
    async execute(message, args, cmd, client, discord, profileData){
        if(!message.member.roles.cache.some(role => role.name === 'Resp | Cerberus Élite' || 'Aiuto Resp. Élite')) return message.channel.send('Non hai i ruoli per poterlo fare')
        let target = message.mentions.users.first();
        if(message.member.roles.cache.some(role => role.name === 'Resp | Cerberus Élite')){
          try {
            profileData = await profileModel.findOne({ userID: target.id });
            if(profileData) return message.channel.send('Utente già inserito nel database');
            if (!profileData) {
              let profile = await profileModel.create({
                user: target.tag,
                userID: target.id,
                punti: 0,
              });
              profile.save();
            }
          } catch (err) {
            console.log(err);
          }
          
          message.channel.send(`Hai aggiunto ${target} al database`)
        } else if(message.member.roles.cache.some(role => role.name === 'Aiuto Resp. Élite')){
          try {
            profileData = await profileModel.findOne({ userID: target.id });
            if(profileData) return message.channel.send('Utente già inserito nel database');
            if (!profileData) {
              let profile = await profileModel.create({
                user: target.tag,
                userID: target.id,
                punti: 0,
              });
              profile.save();
            }
          } catch (err) {
            console.log(err);
          }

          message.channel.send(`Hai aggiunto ${target} al database`)
        } else {message.channel.send('Non hai i permessi per poterlo fare')}


    }
}