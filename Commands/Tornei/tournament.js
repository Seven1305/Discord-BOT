const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "tournament",
    description: "crea un torneo",
    permissions: "ADMINISTRATOR",
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        interaction.reply("TEST")
    }
}