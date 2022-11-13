const Discord = require("discord.js");
const { prefix, token, verify_code } = require("./config.json");
const fs = require("fs");

const client = new Discord.Client();

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