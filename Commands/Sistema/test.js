const { CommandInteraction, MessageEmbed } = require("discord.js");
const { execute } = require("./clear");

module.exports = {
    name: "test",
    description: "test comando",
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        interaction.reply("TEST")
    }
}