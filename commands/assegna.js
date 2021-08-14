const profileModel = require("../models/profileSchema");
module.exports = {
  name: "assegna",
  aliases: ['give'],
  description: "Assegna dei punti a un utente",
  async execute(message, args, cmd, client, discord, profileData) {
    //.........................................................................

    const amount = args[1];
    const target = message.mentions.users.first();

    //..........................................................................

    if(message.member.roles.cache.some(role => role.name === 'Resp | Cerberus Élite')){

      //........................................................................
      
      if (isNaN(amount)) return message.channel.send("I punti da assegnare devono essere un numero intero");
      if (!args.length) return message.channel.send("Nessun utente menzionato");
      if (!target) return message.channel.send("L'utente non esiste");

      //........................................................................

      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`L'utente menzionato non esiste nel database`);
  
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              punti: amount,
            },
          }
        );
          //.....................................................................

        return message.channel.send(`Hai assegnato a ${target}: **${amount} punti**`);

          //......................................................................

      } catch (err) {
        console.log(err);
      }

    } else if(message.member.roles.cache.some(role => role.name === 'Aiuto Resp. Élite')){
      //........................................................................

      if (isNaN(amount)) return message.channel.send("I punti da assegnare devono essere un numero intero");
      if (!args.length) return message.channel.send("Nessun utente menzionato");
      if (!target) return message.channel.send("L'utente non esiste");

      //........................................................................

      try {
        const targetData = await profileModel.findOne({ userID: target.id });
        if (!targetData) return message.channel.send(`L'utente menzionato non esiste nel database`);
  
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },
          {
            $inc: {
              punti: amount,
            },
          }
        );
          //.....................................................................

        return message.channel.send(`Hai assegnato a ${target}: **${amount} punti**`);

          //......................................................................

      } catch (err) {
        console.log(err);
      }
    } else{message.channel.send('Non hai i permessi per poterlo fare')}
  }
}
