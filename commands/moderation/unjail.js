const Discord = require("discord.js");

module.exports = {
	name: "unjail",
  aliases: ["unpunish"],
	description: "Unpunish a punished user.",
  permissions: "KICK_MEMBERS",
	execute(message, args) {
    let jailRole = message.guild.roles.cache.get("843597389758595142");
    let user = message.mentions.members.first();
    if (!user) {
      let targetEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("Por favor menciona al usuario que quieres descastigar.");
      return message.channel.send(targetEmbed);
    }
    if (user.id === message.author.id) {
      let sameidEmbed = new Discord.MessageEmbed()
        .setColor("#FF8C00")
        .setDescription("¡No creo que el castigo te afecte!");
      return message.channel.send(sameidEmbed);
    }
    if (user.roles.cache.has("843597389758595142")) {
      let unjailEmbed = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`**:statue_of_liberty: ¡Se ha removido el castigo a ${user}! :statue_of_liberty:**`)
        .addField("Moderador", `${message.author.tag}`, false)
        .setTimestamp();
       message.channel.send(unjailEmbed);
       user.roles.remove(jailRole);
    }
    else {
      let alreadyEmbed = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`El usuario no esta castigado.`);
      return message.channel.send(alreadyEmbed);
    }
  },
};