module.exports = {
kod: "sil",
async run (clietn, message, args){
  if(isNaN(args)) return message.channel.send('Lütfen bir değer belirtin. Girdiğiniz değer rakam olmalı!')
 if(args < 2 || args > 100) return message.channel.send('Lütfen girdiğiniz değer 2-100 arası olsun!')  
 message.channel.bulkDelete(Number(args))
 const { MessageEmbed } = require('discord.js')
 const soviet = new MessageEmbed()
 .setTitle('**Silme İşlemi Başarılı**')
 .setDescription('**Silinen Mesaj Sayısı**' + args )
message.channel.send(soviet).then(mesaj =>{
    setTimeout(function (){
mesaj.delete()
    }, 5000);
   })
  }
}