const Discord = require("discord.js");

module.exports = {
	name: "roll",
  aliases: ["dice"],
	description: "rolls the dice.",
	execute(message, args) {
    const user = message.author;
    const dice = args[0];
    const side = args[1];
    r = new String("");
    if (!args[0] || isNaN(args[0])) {
      const diceEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("**¡Pon el numero de dados (máximo 2) y caras!**")
        .addField("El formato es:", "`f?roll + [núm. de dados] + [núm. de caras]`", false)
        .setTimestamp();
      return message.channel.send(diceEmbed);
    }
    if (!args[1] || isNaN(args[1])) {
      const sideEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("**¡Pon el numero de caras!**")
        .addField("El formato es:", "`f?roll + [núm. de dados] + [núm de caras]`", false)
        .setTimestamp();
      return message.channel.send(sideEmbed);
    }
    if (dice == 1)  {
      r = Math.floor(Math.random() * (side - 1) + 1);
    }
    else {
      for (var i = 1; i < dice; i++) {
        if (i == 1 || i == dice) {
          r = Math.floor(Math.random() * (side - 1) + 1)
          r = r + ", " + Math.floor(Math.random() * (side - 1) + 1)
        }
      }
    }
    const rollEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(user.avatarURL())
      .setTitle("**:game_die: ¡**" + message.author.tag + " **ha lanzado los dados! :game_die:**")
      .addField("*Y los resultados son...*","`"+r+"`", true)
      .setTimestamp();
    message.channel.send(rollEmbed);
  },
};