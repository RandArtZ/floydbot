const fs = require('fs');

module.exports = {
	name: "reload",
  aliases: ["reset", "r"],
	description: "Reloads a command.",
  permissions: "MANAGE_GUILD",
	args: true,
	execute(message, args) {
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`*¡No existe ningún comando llamado \`${commandName}\`!* :face_with_raised_eyebrow:`);
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${command.name}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`*¡El comando \`${newCommand.name}\` ha sido recargado!* :clap:`);
		} catch (error) {
			console.error(error);
			message.channel.send(`Hubo un error mientras se cargaba el comando \`${command.name}\`:\n\`${error.message}\``);
		}
	},
};