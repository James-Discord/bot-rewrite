module.exports.run = (client, message, args) => {
    userData.delete(message.author.id)
    message.channel.send('You have unlinked this account!')

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
