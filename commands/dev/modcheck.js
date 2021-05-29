module.exports = {
	name: "modcheck",
	description: "Check if you have moderation permissions.",
	permissions: "KICK_MEMBERS",
	execute(message, args) {
		message.channel.send(":thumbsup:");
	},
};