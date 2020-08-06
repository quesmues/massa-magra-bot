'use strict';

/**
 * A bot that welcomes new guild members when they join
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const {prefix, token} = require('./config.json');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}massamagra`) {
        message.channel.send(`T\no\n \nc\no\nm\n \nf\no\nm\ne`);
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Nome do servidor: ${message.guild.name}\nTotal de membros: ${message.guild.memberCount}`);
    }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'geral');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bem vindo ${member}, ao servidor dos desocupados na quarentena!!!!!!!!!!!!!`);
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(`${token}`);