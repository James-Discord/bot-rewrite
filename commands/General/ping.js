const { MessageEmbed } = require("discord.js")


module.exports.run = async (client, message, args) => {
    message.channel.send({
        embeds: [new MessageEmbed().setTitle("Pong!").setColor("#36393F").addField(`> <:pepehappy:759028157898293300> API Latency:`, `**${client.ws.ping}ms**`, true).addField(`> <:blobthumbsuo:759028035822813214> Bot Latency:`, `**${Date.now() - message.createdTimestamp}ms**`, true)]
    });
}

/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'ping', // default = file name (without the extention)
    description: "Shows the bot's ping." // default is "None"
}
