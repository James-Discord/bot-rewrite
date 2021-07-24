module.exports.run = (client, message, args) => {
    userData.delete(message.author.id)
    message.channel.send({
        embeds: [new MessageEmbed().setTitle("Account Unlink!").setColor("#36393F")
        .addField(`Your account has now been unlinked from this discord account!`)
        .setFooter(`Requested by ${message.author.tag}`).setTimestamp()]
    });
}


/**
 * This is completely optional...
 */

module.exports.info = {
    name: 'unlink',// default = file name (without the extention)
    description: "A command to unlink your account",// default is "None"
    requiredPermission: null,// default is null
    aliases: [ul], // default is null
    usage: 'unlink' // default is null
}
