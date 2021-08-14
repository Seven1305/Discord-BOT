const tts = require('google-tts-api');
const download = require('download');
const { Readable } = require('stream');
const Discord = require ('discord.js');

module.exports = {
  name: "tts",
  aliases: ['speak'],
  description: "Parla in voc",
  /**
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  async execute(message, args) {
    let vc = message.member.voice.channel;
    if (!vc) return message.channel.send('your not in a vc.');
    if(!vc.members.has(message.client.user.id) && message.guild.me.voice.connection) await vc.join();


    let Lang = args.shift();

    let urls = tts.getAllAudioUrls(args.join(' '), {
      lang: Lang,
      slow: false
    }).map(val => val.url);

    let options = {
      seek: 0,
      volume: 50,
    };

    for (let url of urls){
      await new Promise(async (resolve, reject) => {
        let audio = Readable.from(await download(url));

        const stream = message.guild.me.voice.connection.play(audio, options);

        stream.on('finish', () => {
          stream.end();
          delete audio, stream;
          resolve();
        });
      })
    }
  }
}