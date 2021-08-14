module.exports = {
    name: 'leave',
    aliases: [],
    description: 'Esce dalla voc',
    async execute(message,args, cmd, client){

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Devi essere nella stessa mia ocale per poter usare questo comando!');
        if (voice_channel) return voice_channel.leave();
    }
}
