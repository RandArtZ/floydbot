const Discord = require("discord.js");

module.exports = {
	name: "jail",
  aliases: ["punish"],
	description: "Punish an user.",
  permissions: "KICK_MEMBERS",
	execute(message, args) {
    let jailRole = message.guild.roles.cache.get("843597389758595142");
    let user = message.mentions.members.first();
    if (!user) {
      let targetEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("Por favor menciona al usuario que quieres castigar.");
      return message.channel.send(targetEmbed);
    }
    if (user.id === message.author.id) {
      let sameidEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("¡No puedes castigarte a ti mismo!");
      return message.channel.send(sameidEmbed);
    }
    if (user.roles.cache.has("843644501469298738")) {
      let alreadyEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("El usuario ya esta castigado.");
      return message.channel.send(alreadyEmbed);
    }
    let jailEmbed = new Discord.MessageEmbed()
      .setColor("#FF8C00")
      .setTitle("**:rotating_light: ¡USUARIO CASTIGADO! :rotating_light:**")
      .setDescription(`El usuario ${user} ha sido castigado.
      **ID:** ${user.id}`)
      .addField("Moderador", `${message.author.tag}`, false)
      .setTimestamp();
    message.channel.send(jailEmbed);
    user.roles.add(jailRole);
	},
};