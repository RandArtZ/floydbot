const Discord = require("discord.js");

module.exports = {
	name: "kick",
	description: "Kicks an user.",
	permissions: "KICK_MEMBERS",
	execute(message, args) {
		let user = message.mentions.members.first();
    if (!user) {
      let targetEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("Por favor menciona al usuario que quieres expulsar.");
      return message.channel.send(targetEmbed);
    }
    if (user.id === message.author.id) {
      let sameidEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("¡No puedes expulsarte a ti mismo!");
      return message.channel.send(sameidEmbed);
    }
    if (!args[1]) {
      let reasonEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("Por favor escribe de la razón de la expulsión.");
      return message.channel.send(reasonEmbed);
    }
    let kickEmbed = new Discord.MessageEmbed()
      .setColor("#FF8C00")
      .setTitle("**:leg: ¡USUARIO EXPULSADO! :leg:**")
      .setDescription(`El usuario ${user} fue expulsado del servidor.
      **ID:** ${user.id}`)
      .addField("Razón", args[1], false)
      .addField("Moderador", `${message.author.tag}`, false)
      .setTimestamp();
    message.channel.send(kickEmbed);
    user.kick(args[1]);
	},
};