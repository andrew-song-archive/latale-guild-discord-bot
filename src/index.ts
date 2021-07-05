import * as dotenv from 'dotenv';
import * as Discord from 'discord.js';
import router from './router';

dotenv.config();

const bot = new Discord.Client();
bot.login(process.env.DISCORD_BOT_TOKEN);

bot.on('ready', () => console.log(`Ready ${bot.user.tag}`));

bot.on('message', message => router.route(message));