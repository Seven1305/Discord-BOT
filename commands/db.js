const profileModel = require("../models/profileSchema");
const Discord = require('discord.js');

module.exports = {
    name: 'db',
    aliases: [],
    descritpion: 'aggiunge un utente al database',
    async execute(client, message, args, cmd, discord, profileData){
        const utente = message.mentions.users.first();
        if(message.member.roles.cache.some(role => role.name === 'Resp | Cerberus Élite')){
          try {
            profileData = await profileModel.findOne({ userID: utente.id });
            if(profileData) return message.channel.send('Utente già inserito nel database');
            if (!profileData) {
              let profile = await profileModel.create({
                user: utente.tag,
                userID: utente.id,
                luglio: 0,
                agosto: 0,
                settembre: 0,
                ottobre: 0,
                novembre: 0,
              });
              profile.save();
            }
          } catch (err) {
            console.log(err);
          }

          message.channel.send(`Hai aggiunto ${utente} al database`)
        } else if(message.member.roles.cache.some(role => role.name === 'Aiuto Resp. Élite')){
          try {
            profileData = await profileModel.findOne({ userID: utente.id });
            if(profileData) return message.channel.send('Utente già inserito nel database');
            if (!profileData) {
              let profile = await profileModel.create({
                user: utente.tag,
                userID: utente.id,
                punti: 0,
              });
              profile.save();
            }
          } catch (err) {
            console.log(err);
          }

          message.channel.send(`Hai aggiunto ${utente} al database`)
        } else {message.channel.send('Non hai i permessi per poterlo fare')}


    }
}