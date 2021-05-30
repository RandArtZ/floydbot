const Discord = require("discord.js");

module.exports = {
	name: "covid",
  aliases: ["covidtest"],
	description: "Checks if an user have coronavirus.",
	execute(message, args) {
    function result() {
      var result = Math.round(Math.random()*1);
      switch(result) {
        case 0: return "POSITIVO**!* :scream:";
        case 1: return "NEGATIVO**!* :partying_face:";
      }
    }
    function tip() {
      var tip = Math.round(Math.random()*1);
      switch(tip) {
        case 0: return "trae siempre mascarilla.";
        case 1: return "lávate las manos antes y después de cada acción.";
        case 1: return "mantén una distancia segura.";
      }
    }
    let user = (message.mentions.users.first()) || message.author;
    const covidEmbed = new Discord.MessageEmbed()
     .setColor("#7FFF00")
     .setTitle("**:microbe: PRUEBA DE COVID :microbe:**")
     .setDescription(`*¡El usuario ${user} ha salido* ***${result()}`)
     .setFooter("Tip: " + tip());
    message.channel.send(covidEmbed)
  },
};