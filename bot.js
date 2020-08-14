require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

// Twitter
const twitter = require('twitter');
const twitter_client = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

client.once('ready', () => console.log(`Logged in as ${client.user.tag}.`));

client.on('message', async (message) => {
  if (message.channel.id !== process.env.DISCORD_CHANNEL_ID) return;
  await twitter_client.post('statuses/update', { status: message.content });
});

client.login(process.env.DISCORD_BOT_TOKEN);
