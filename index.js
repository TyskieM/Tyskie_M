const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA0OTk3MDg5MzIyNTk4NDUw.Xs0B2Q.8lwN9lR60KPzbyQAKV9jcbEQeOo';

const PREFIX = '!';

bot.on('ready', MessageChannel=>{
    console.log('bot został uruchomiony.')
})

bot.on('message', message=>{


let args = message.content.substring(PREFIX.lenght).split(" ");
    switch(args[0]){
        case 'witaj':
            message.channel.send('Witaj, witam cie na discord :D');
        break;

        case 's!clear':
            if(!message.member.hasPermission('MANAGE_MESSAGES')){
                message.channel.send('Nie masz permisji')
                return;

            }
            message.channel.bulkDelete(args[1])
        break;
        }

})

bot.login(token);
