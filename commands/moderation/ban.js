const Discord = require("discord.js");

module.exports = {
	name: "ban",
	description: "ban an user.",
	permissions: "BAN_MEMBERS",
	execute(message, args) {
		let user = message.mentions.members.first();
    if(!user) {
      let targetEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("Por favor menciona al usuario que quieres banear.");
      return message.channel.send(targetEmbed);
    }
    if(user.id === message.author.id) {
      let sameidEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("¡No puedes banearte a ti mismo!");
      return message.channel.send(sameidEmbed);
    }
    if(!args[1]) {
      let reasonEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("Por favor escribe de la razón del baneo.");
      return message.channel.send(reasonEmbed);
    }
    let banEmbed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("**:skull: ¡USUARIO BANEADO! :skull:**")
      .setDescription(`El usuario ${user} fue baneado del servidor.
      **ID:** ${user.id}`)
      .addField("Razón", args[1], false)
      .addField("Moderador", `${message.author.tag}`, false)
      .setTimestamp();
    message.channel.send(banEmbed);
    user.ban({ days: 365, reason: "" })
	},
};