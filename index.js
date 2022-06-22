const Discord = require('discord.js');
const config = require('./config.js');
if(!config) throw Error('Config file not found!');
const client = new Discord.Client({
  intents: ['GUILDS']
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  await client.application.commands.set([]);
  await Promise.all(client.guilds.cache.map(m => m?.commands?.set([]).catch(()=>null)));
  await client.destroy();
  await process.exit(1);
})

client.login(config.token);