const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
	name: "serverinfo",
  aliases: ["server"],
	description: "Shows server information.",
	execute(message, args) {
    let region = {
      "brazil": "Brasil :flag_br:",
      "eu-central": "Europa Central :flag_eu:",
      "singapore": "Singapur :flag_sg: ",
      "us-central": "E.U. Centro :flag_us: ",
      "sydney": "Sídney​ :flag_au:",
      "us-east": "E.U. Este :flag_us:",
      "us-south": "E.U. Sur :flag_us:",
      "us-west": "E.U. Oeste :flag_us:",
      "eu-west": "Europa Occidental :flag_eu:",
      "vip-us-east": "E.U. Este VIP :flag_us:",
      "london": "Londres :flag_gb:",
      "amsterdam": "Amsterdam :flag_nl:",
      "hongkong": "Hong Kong :flag_hk:",
      "russia": "Rusia :flag_ru: ",
      "southafrica": "Sudáfrica :flag_za:"
    };
    const created = moment(message.guild.createdAt).format("DD/MM/YYYY, hh:mm A");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setThumbnail(message.guild.iconURL())
      .addField("▸ Dueñ@", `<@${message.guild.owner.user.id}> :crown:`, false)
      .addField("▸ Fecha de creación", created, false)
      .addField("▸ Miembros", `
        :busts_in_silhouette: Total: **${message.guild.members.cache.size}**
        :bust_in_silhouette: Personas: **${message.guild.members.cache.filter(member => member.user.bot).size}**
        :gear: Bots: **${message.guild.members.cache.filter(member => !member.user.bot).size}**
        `, true)
      .addField("▸ Canales", `
        :speech_balloon: Texto: **${message.guild.channels.cache.filter(channel => channel.type === "text").size}**
        :loud_sound: Voz: **${message.guild.channels.cache.filter(channel => channel.type === "voice").size}**
        :microphone: Escenario: **${message.guild.channels.cache.filter(channel => channel.type === "stage").size}**
        `, true)
      .addField("▸ Extras", `
        :label: Roles: **${message.guild.roles.cache.size}**
        :performing_arts: Emojis: **${message.guild.emojis.cache.size}**
        :globe_with_meridians: Región: **${region[message.guild.region]}**`
        , true)
      .setTimestamp()
      .setFooter("ID: " + message.guild.id);
    message.channel.send({embed});
  },
};