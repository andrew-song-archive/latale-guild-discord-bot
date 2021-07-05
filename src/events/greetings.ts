import EventLoader from "./_loader";
import * as Discord from 'discord.js';

EventLoader.addEvent('안녕', (message: Discord.Message) => {
  message.reply('반가워요!');
});