module.exports = {
    name: 'join',
    aliases: [],
    description: 'Entra in voc',
    async execute(message,args, cmd, client){

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Devi essere in una vocale per poter usare questo comando!');
        if (voice_channel) return voice_channel.join();
    }
}
