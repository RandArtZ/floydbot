const Discord = require("discord.js");

module.exports = {
	name: "howgay",
  aliases: ["gay"],
	description: "Calculate the gay percentage of any user.",
	execute(message, args) {
    let number = [0, 1, 5, 10, 12, 15, 20, 24, 25, 30, 35, 42, 50, 55, 60, 65, 69, 70, 75, 80, 85, 90, 95, 100, 120, 150, 200, 300, 420, 666, 777, 911, 1000, 10000, 100000];
    var random = number[Math.floor(Math.random() * number.length)];
    let user = (message.mentions.users.first()) || message.author;
    const gayEmbed = new Discord.MessageEmbed()
     .setColor("#FF69B4")
     .setTitle("** :rainbow_flag: MEDIDOR DE GAY :rainbow_flag:**")
     .setDescription(`*¡El usuario ${user} es **${random}%** gay!*`);
    message.channel.send(gayEmbed)
  },
};