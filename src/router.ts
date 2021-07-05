import EventLoader from './events/_loader';
import * as Discord from 'discord.js';

function route(message: Discord.Message) {
  const content = message.content;
  if (!content.startsWith('!')) return;
  
  console.log(content);

  const tokens = content.split(/\s+/);
  const eventName = tokens[0].slice(1);
  const eventArgs = tokens.slice(1);

  console.log(tokens);

  if (EventLoader.events.hasOwnProperty(eventName)) {
    console.log(`call ${eventName}`)
    EventLoader.events[eventName](message, eventArgs);
  }
}

export default {
  route,
}