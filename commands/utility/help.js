const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
	name: "help",
	description: "I need somebody!",
	execute(message, args) {
    const category = args[0];
    if (!category) {
    const aboutEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**:star: LISTA DE COMANDOS :star:**")
        .addField(":tools: Útiles", "`" + prefix + "help utility`", true)
        .addField(":smile: Diversión", "`" + prefix + "help fun`", true)
        .addField(":shield: Moderación", "`" + prefix + "help moderation`", true)
    message.channel.send(aboutEmbed);
    }
    if (category === "utility") {
      const utilityEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**:tools: Comandos de Útiles**")
        .setDescription("`about`, `avatar`, `help`, `jumbo`, `ping`, `servericon`, `serverinfo`, `userinfo`"
        )
        .setFooter("¡Recuerda usar " + prefix + " pegado antes de cada comando!");
      message.channel.send(utilityEmbed);
    }
    if (category === "fun") {
      const funEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**:smile: Comandos de Diversión**")
        .setDescription("`8ball`, `covid`, `howgay`, `howgrasa`, `howsimp`, `roll`, `say`"
        )
        .setFooter("¡Recuerda usar " + prefix + " pegado antes de cada comando!");
      message.channel.send(funEmbed);
    }
    if (category === "moderation") {
      const moderationEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**:shield: Comandos de Moderación**")
        .setDescription("**ADVERTENCIA: Estos comandos solo pueden ser usados por los moderadores.**\n `ban`, `jail`, `kick`, `mute`, `unjail`, `unmute`")
        .setFooter("¡Recuerda usar " + prefix + " pegado antes de cada comando!");
      message.channel.send(moderationEmbed);
    }
	},
};