const config = require('./config.js');
if(!config) throw Error('Config file not found!');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

const rest = new REST({ version: '9' }).setToken(config.token);

rest
  .put(Routes.applicationCommands(Buffer.from(config.token.split('.')[0], 'base64').toString()), { body: [], })
  .then((res) => {
    console.log("Cleared the bot's global commands.");
  })
  .catch(console.error);
