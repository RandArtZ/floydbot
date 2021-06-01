const Discord = require("discord.js");

module.exports = {
	name: "jumbo",
  aliases: ["emoji"],
	description: "Send an emoji in full quality.",
	async execute(message, args) {
    const select = args[0];
    if(!args[0]) {
      const noemojiEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("Debes escribir un emoji del servidor.");
      message.channel.send(noemojiEmbed);
    }
    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]);
    if (!emoji) {
      const invalidemojiEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("Ese no es un emoji valído del servidor.");
      message.channel.send(invalidemojiEmbed);
    }
    try {
      message.channel.send(emoji.url);
    } 
    catch (error) {
    }
  },
};