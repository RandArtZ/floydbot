const { prefix } = require("../../config.json");
module.exports = {
	name: "say",
	description: "Send a message through the bot",
	execute(message, args) {
		message.delete();
    message.channel.send(message.content.replace(prefix + "say", ""));
	},
};