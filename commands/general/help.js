const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
	name: "help",
  aliases: ["info", "floyd"],
	description: "I need somebody!",
	execute(message, args) {
    var textFile = fs.readFileSync("./files/commands/help.txt", {"encoding": "utf-8"});
		const helpEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Floyd")
        .setDescription(textFile);
    message.channel.send(helpEmbed);
	},
};