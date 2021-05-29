const Discord = require("discord.js");

module.exports = {
	name: "avatar",
	description: "Shows mentioned user avatar",
	execute(message, args) {
		const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag, user.avatarURL())
        .setImage(user.avatarURL({size: 512, format:"png", dynamic: true}))
        .setFooter("ID: " + user.id);
    message.channel.send(avatarEmbed);
	},
};