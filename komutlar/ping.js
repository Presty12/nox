module.exports = {
kod : "ping",
async run (clietn, message, args){
const { MessageEmbed } = require('discord.js')
const soviet = new MessageEmbed()
.setTitle('Değerler')
.setColor('RANDOM')
.addField('Botun Pingi', client.ws.ping + ' ms')
.addField('Mesaj Gecikme Süresi', `${Data.now() - message.createdTimestamp} ms`)
message.channel.send(soviet)
}
}