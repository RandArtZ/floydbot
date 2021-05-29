const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
	name: "userinfo",
  aliases: ["user"],
	description: "Shows user information.",
	execute(message, args) {
		let user = (message.mentions.users.first()) || message.author;
    let member = message.mentions.members.first() || message.member;
    const created = moment(user.createdAt).format("DD/MM/YYYY, hh:mm A");
    const joined = moment(member.joinedAt).format("DD/MM/YYYY, hh:mm A");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(user.tag, user.avatarURL())
      .setThumbnail(user.avatarURL())
      .addField(":bust_in_silhouette: Creación de cuenta", created, false)
      .addField(":busts_in_silhouette: Fecha de llegada", joined, false)
      .addField(":pencil2: Apodo", member.nickname ? member.nickname : "N/A", true)
      .addField(":satellite: Estado", user.presence.status, true)
      .addField(":robot: ¿Bot?", user.bot, true)
      // .addField("Roles", 
      //   message.member.roles.cache.filter(role => role.name !=="@everyone").map(role => "<@&" + role.id + ">" ).join(", ")
      // )
      .setTimestamp()
      .setFooter("ID: " + user.id)
  message.channel.send({embed: embed});
	},
};