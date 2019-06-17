const fs = require("fs")
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const commando = require('discord.js-commando')
const permission = Discord.Permissions.FLAGS;

client.login(config.token);




client.on("ready", () => {
  console.log("ni hao");
});

var dt = new Date();
var utcDate = dt.toUTCString();


  
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
    console.log(utcDate);
    console.log("pong!");
  }
});

client.on("message", (message) => {
	if (message.content.startsWith("bottime")) {
		message.channel.send(utcDate);
		console.log(utcDate + ": !bottime");
	}
});


client.on("message", (message) => {
		caseinsensitive = message.content.toLowerCase();
				if (caseinsensitive.startsWith("super fighting robot")) {
			message.channel.send("MEGA MAN!");
  }
});




client.on('message', (message) => { //whenever a message is sent
  if (message.content.includes('81ZH2Y'||'privatepage.vip')) { //if it contains an invite link
    message.delete() //delete the message
    message.guild.ban(message.author)
      .then(message.channel.send(message.author + ' be gone thot'))
  }
})

