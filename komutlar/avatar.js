module.exports = {
kod: "avatar",
async run (client, message, args){

const { MessageEmbed } = require('discord.js')
const user = message.mentions.users.first()
if(user) {
    const soviet = new MessageEmbed()
    .setTitle(`${user} Adlı Kullanıcının Avatarı;`)
    .setColor('RANDOM')
    .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(soviet)
}else{
    const soviet = new MessageEmbed()
    .setTitle('Avatarın;')
    .setColor('RANDOM')
    .setImage(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(soviet)
}







}

}