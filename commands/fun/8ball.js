const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
	name: "8ball",
	description: "",
	async execute (message, args) {
    const user = message.author;
    const question = args.slice().join(" ")
    let answer = [
      "En mi opinión, sí.",
      "Es cierto.",
      "Es decididamente así.",
      "Probablemente.",
      "Buen pronóstico.",
      "Todo apunta a que sí.",
      "Sin duda.",
      "Sí.",
      "Sí, definitivamente.",
      "Debes confiar en ello.",
      "Respuesta vaga, vuelve a intentarlo.",
      "Pregunta en otro momento.",
      "Será mejor que no te lo diga ahora.",
      "No puedo predecirlo ahora.",
      "Concéntrate y vuelve a preguntar.",
      "No cuentes con ello.",
      "Mi respuesta es no.",
      "Mis fuentes me dicen que no.",
      "Las perspectivas no son buenas.",
      "Muy dudoso."
    ];
    var eightball = answer[Math.floor(Math.random() * answer.length)];
    if (!question) {
      const noquestionEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("Por favor haga su pregunta.");
      return message.channel.send(noquestionEmbed);
    }
    const eightballEmbed = new Discord.MessageEmbed()
      .setColor("#670074")
      .setThumbnail(user.avatarURL())
      .setTitle("**:8ball: " + message.author.tag + " preguntó a la bola mágica... :8ball:**")
      .addField("Pregunta", `${question}`, false)
      .addField("Respuesta", eightball, false)
      .setTimestamp();
    message.channel.send(eightballEmbed);
  },
};