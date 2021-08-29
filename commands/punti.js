const profileModel = require("../models/profileSchema");
module.exports = {
  name: 'punti',
  aliases: ['points'],
  description: "Punti elite",
  async execute (message, args, cmd, client, discord, profileData) {
    message.reply(`per adesso hai accumulato:** ${profileData.punti} punti**`)
  }
}

