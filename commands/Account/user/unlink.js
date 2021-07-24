module.exports.run = (client, message, args) => {
    userData.delete(message.author.id) //This is where the bot removes the Panel account from the Dicord User
    message.channel.send({
        embeds: [new MessageEmbed().setTitle("Account Unlink").setColor("#36393F")
        .addField(`Your account has now been unlinked from this discord account!`)
        .setFooter(`Requested by ${message.author.tag}`).setTimestamp()]//This is just a simple little embeded to tell them that there account is unlinked
    });
}



module.exports.info = {
    name: 'unlink',
    description: "A command to unlink your account",
    requiredPermission: null,
    aliases: [ul], 
    usage: 'unlink'
}
