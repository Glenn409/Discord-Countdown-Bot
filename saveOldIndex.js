const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';


client.on('ready', () => {
  console.log('Countdown Bot is ready!');
});

client.on('message',message =>{
  //will make sure the bot doesn't talk to itself
  if(message.author.equals(client.user)){
    return;
  }

  if(!message.content.startsWith(prefix)){
    return;
  }

  let countdown_array = message.content.substring(prefix.length).split(" ");
  console.log(countdown_array);

  if(isNaN(countdown_array[1]) || isNaN(countdown_array[2])){
    message.reply('Please use Correct format! "!countdown hours mins".');
  }else {
    client.user.setPresence({ game: { name: (countdown_array[1] + ' hrs : ' + countdown_array[2] + " mins"), type: 0 } });
    message.reply('Adjusted the Pump Countdown!');
  }

});
client.login('NDAxNDQ5NzgwOTM4NTM5MDA5.DTqvpQ.u4HE1EDcUomVyvWq_3aOlVmQROc');
