const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';


client.on('ready', () => {
  console.log('Countdown Bot is ready!');
});

client.on('message',message =>{
//checks ping/delay of bot basically.
  if (message.content.startsWith('!ping')){
    const then = Date.now();
    message.channel.send('pinging... ').then(m =>{
      m.edit('Pong! It took ' + ((then - Date.now()) * -1) +'ms aka ('+ (((then - Date.now())/1000) *-1) + 'secs)');
    })
  };



  if(message.content.startsWith('!countdown')){
    console.log('setting pump countdown!')
    client.user.setGame('No Pump Scheduled');
  }
  //will make sure the bot doesn't talk to itself
/*  if(message.author.equals(client.user)){
    return;
  }

  if(!message.content.startsWith(prefix)){
    return;
  }

  let countdown_array = message.content.substring(prefix.length).split(" ");
  console.log(countdown_array);

*/
});
client.login(process.env.BOT_TOKEN);
