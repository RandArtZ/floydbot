const Discord = require("discord.js");

module.exports = {
	name: "unmute",
	description: "Unmute a muted user.",
  permissions: "KICK_MEMBERS",
	execute(message, args) {
    let mutedRole = message.guild.roles.cache.get("843644501469298738");
    let user = message.mentions.members.first();
    if (!user) {
      let targetEmbed = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setDescription("Por favor menciona al usuario que quieres desilenciar.");
      return message.channel.send(targetEmbed);
    }
    if (user.id === message.author.id) {
      let sameidEmbed = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setDescription("¡No creo que el silencio te afecte!");
      return message.channel.send(sameidEmbed);
    }
    if (user.roles.cache.has("843644501469298738")) {
      let unmutedEmbed = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`**:loud_sound: ¡Se ha removido el silencio a ${user}! :loud_sound:**`)
        .addField("Moderador", `${message.author.tag}`, false)
        .setTimestamp();
       message.channel.send(unmutedEmbed);
       user.roles.remove(mutedRole);
    }
    else {
      let alreadyEmbed = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`El usuario ya puede hablar.`);
      return message.channel.send(alreadyEmbed);
    }
  },
};