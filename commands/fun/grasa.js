const Discord = require("discord.js");

module.exports = {
	name: "grasa",
  aliases: ["howgrasa", "grasoso", "howgrasoso", "grease", "howgrease"],
	description: "Calculate the grease percentage of any user.",
	execute(message, args) {
    let number = [0, 1, 5, 10, 12, 15, 20, 24, 25, 30, 35, 42, 50, 55, 60, 65, 69, 70, 75, 80, 85, 90, 95, 100, 120, 150, 200, 300, 420, 666, 777, 911, 1000, 10000, 100000];
    var random = number[Math.floor(Math.random() * number.length)];
    let user = (message.mentions.users.first()) || message.author;
    const grasaEmbed = new Discord.MessageEmbed()
     .setColor("#FFFF00")
     .setTitle("**:poop: MEDIDOR DE GRASA :poop:**")
     .setDescription(`*¡El usuario ${user} es **${random}%** grasoso!* **:v**`);
    message.channel.send(grasaEmbed)
  },
};