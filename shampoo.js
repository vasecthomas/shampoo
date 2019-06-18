const fs = require("fs")
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const commando = require('discord.js-commando')
const permission = Discord.Permissions.FLAGS;

client.on('error', console.error);
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
if (message.author.bot) return;
				if (caseinsensitive.startsWith("super fighting robot")) {
			message.channel.send("MEGA MAN!");

  }
});

client.on("message", (message) => {
		caseinsensitive = message.content.toLowerCase();
if (message.author.bot) return;

				if (caseinsensitive.startsWith("mega man")) {
			message.channel.send("super fighting robot");
  }
});




client.on('message', async message => {
let blacklisted = ['QYHhZv', 'privatepage', '81ZH2Y'];
let foundInText = false;
for (var i in blacklisted) {
	if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
}

if (foundInText) {
	message.delete();
	message.guild.ban(message.author);
}
});
