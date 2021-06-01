const Discord = require("discord.js");

module.exports = {
	name: "servericon",
  aliases: ["serverpic", "serverimage", "serverpfp"],
	description: "Shows server icon.",
	execute(message, args) {
    const user = message.author;
    const iconEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Icono de ${message.guild.name}`, message.guild.iconURL())
      .setImage(message.guild.iconURL({size: 2048, dynamic: true}))
      .setFooter(`Pedido por ${message.author.tag}`)
    message.channel.send(iconEmbed)
  },
};