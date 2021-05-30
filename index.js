const Discord = require("discord.js");
const { prefix, token, verify_code } = require("./config.json");
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
	}
}

client.login(token);

// Web Server

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("ok");
});
server.listen(3000);

// Bot Activity Status

client.once("ready", () => {
  console.log("I'm ready!");

  client.user.setPresence({
    status: "online",
    activity: {
      name: "randartz.cf | f?help",
      type: "PLAYING"
    }
  });
});

// Commands Handler

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === "dm") {
    const dmEmbed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setDescription("No estamos dentro del Randyserver para que uses ese comando... :pensive:");
		return message.reply(dmEmbed);
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
      const forbiddenEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("**¡No puedes hacer eso!** :angry:");
			return message.channel.send(forbiddenEmbed);
		}
	}

	if (command.args && !args.length) {
    const emptyEmbed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setDescription("Umm... Se te olvido poner algo en el comando, *¿No?* :thinking:");
		let reply = emptyEmbed;

		if (command.usage) {
			reply += `\nSu uso apropiado deberia ser: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		const errorEmbed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription(":x: **¡Hubo un error al intentar ejecutar el comando!** :x:");
    message.channel.send(errorEmbed)
	}
});

// Server verification

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.get("845428793073729546");
  const verifyEmbed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**¡Bienvenid@!**")
    .setDescription("Por favor escribe la contraseña que se encuentra en <#782049672805220362> para poder entrar");

    channel.send(`${member.user}`, verifyEmbed);
});

client.on("message", message => {
  if (message.author == client.user) { return; }

  // Correct password
  if (message.content.toLowerCase() === verify_code && message.channel.id === "845428793073729546") {
    message.delete();
    message.member.roles.add (message.guild.roles.cache.get("774018006044639294"));
	}
  
  // Wrong password
  else if (message.channel.id === "845428793073729546") {
    message.delete();
    const wrongEmbed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle(":x: **Contraseña incorrecta :x:**")
      .setDescription("Lee bien las reglas en <#782049672805220362> para encontrarla e intente de nuevo :expressionless:");
    message.channel.send(wrongEmbed)
    .then(msg => {
      msg.delete({ timeout: 5000 });
    })
    .catch();
  }
});