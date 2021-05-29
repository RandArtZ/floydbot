const { prefix } = require("../../config.json");
module.exports = {
	name: "ping",
	description: "Ping!",
	execute(message, args) {
		message.channel.send(":v:");
	},
};