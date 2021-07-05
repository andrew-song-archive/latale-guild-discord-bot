import * as fs from 'fs';
import * as path from 'path';

const events = {}

function addEvent(eventName, func) {
  events[eventName] = func;
}

export default {
  events,
  addEvent,
}

fs.readdirSync(`${__dirname}`)
  .filter(file => (file.indexOf('.') !== 0) && (file.indexOf('_') !== 0) && (file.slice(-3) === '.js'))
  .map(file => require(path.join(`${__dirname}`, file)))