const { Client } = require("discord.js")

module.exports = {
    name:"ready",
    once: true,
    /**
     * @param { Client } client
     */
    execute(client) {
        console.log("Now online.");
        client.user.setActivity("servers", {type: "LISTENING"})
    }
}