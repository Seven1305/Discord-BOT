
module.exports = {
    name: '',
    description: "Comando ",
    async execute(client, message, cmd, args) {

        message.channel.send(`Grande lode al nostro membro più sommo, ${message.member}`)
        
    }
}