const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const c = require("./DCC.json")



checkdays:
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  let months = Math.floor(diff / 2592000000);
  let years = Math.floor(diff / 31556952000); 

  return years + (years == 1 ? ` year` : ` years`) + " /" + months + (months == 1 ? " month" : " months") + " /" + days + (days == 1 ? " day" : " days")  + " ago"
}




client.on("guildCreate", (guild) => {
  const guildcreate = new Discord.RichEmbed()
.setColor(`#50aa41`)
.setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
.setDescription(`${guild.name} (${guild.nameAcronym})`)
.setTitle(`MesssageModBot joined a new guild`)
.setImage(`${guild.iconURL == NaN ? ``:`${guild.iconURL}`}`)
.addField(`Joined at:`, `${new Date().toLocaleString()}`)
.addField(`current servers`, `${client.guilds.map(servers => `"${servers.name}", ${servers.memberCount} members, ServerID: ${servers.id}, Owner: ${servers.owner.displayName} (${servers.owner.presence.status})`).join(`\n `)} \n (bot is in ${client.guilds.size} servers, with a total of ${client.users.size} users)`)
.addField(`GUILD INFO`, `${guild.name} was created on ${guild.createdAt.toLocaleString()} by ${guild.owner} \n Guild has ${guild.memberCount} users`)
.setTimestamp()
.setFooter(`MessageModBot`);
 client.channels.get('670713528188928060').send(guildcreate)
});


client.on("guildDelete", (guild) => {
  const guildcreate = new Discord.RichEmbed()
.setColor(`#f80006`)
.setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
.setDescription(`${guild.name} (${guild.nameAcronym})`)
.setTitle(`MesssageModBot was removed from a guild`)
.setImage(`${guild.iconURL == NaN ? ``:`${guild.iconURL}`}`)
.addField(`Joined at:`, `${new Date().toLocaleString()}`)
.addField(`current servers`, `${client.guilds.map(servers => `"${servers.name}", ${servers.memberCount} members, ServerID: ${servers.id}, Owner: ${servers.owner.displayName} (${servers.owner.presence.status})`).join(`\n `)} \n (bot is in ${client.guilds.size} servers, with a total of ${client.users.size} users)`)
.addField(`GUILD INFO`, `${guild.name} was created on ${guild.createdAt.toLocaleString()} by ${guild.owner} \n Guild has ${guild.memberCount} users`)
.setTimestamp()
.setFooter(`MessageModBot`);
 client.channels.get('670713528188928060').send(guildcreate)
});



client.on("error", () => {
client.channels.get(`670380179780141057`).send(`${Error}`)
});



startup:
client.on("ready", () => {
  var cu = client.user
  var d = new Date(2019, 11, 7, 4, 20, 0, 0)
  var now = new Date()

  client.user.setActivity(`for messages`, {type: `WATCHING`})
  
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  const total = process.memoryUsage().heapTotal / 1024 / 1024;

const startuplog = new Discord.RichEmbed()
.setColor(`${c.green}`)
.setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
.setTitle(`MessageModBot is now ready`)
.addField(`acitvity`, `${client.user.presence.game.name == null ? "none":`${client.user.presence.game.name}`}`)
.addField(`Started at:`, `${new Date().toUTCString()} \n with memory ${Math.round(used * 100) / 100} MB \n out of total memory: ${Math.round(total * 100) / 100} MB`)
.addField(`servers`, `${client.guilds.map(servers => `"${servers.name}", ${servers.memberCount} members, ServerID: ${servers.id}, Owner: ${servers.owner.displayName} (${servers.owner.presence.status})`).join(`\n `)} \n (bot is in ${client.guilds.size} servers, with a total of ${client.users.size} users)`)
.addField(`MessageModBot was created on`, `${cu.createdAt.toLocaleString()} (${checkDays(cu.createdAt)})`)
.setTimestamp()
.setFooter(`MessageModBot`);
 client.channels.get('670712865891549210').send(startuplog)
  console.log(`
  ${__} \n
  ${d}
  ${now}
  ${checkDays(d)}
  \n\n\n\n ${__} \n
  BOT AGE: ${cu.createdAt.toLocaleString()} (${checkDays(cu.createdAt)})
  successfully logged in as "${client.user.tag}" 
  ${vaccinated} 
  avatar: ${client.user.displayAvatarURL}
 ${servers}\n\n
 \n
 ${client.guilds.map(servers => `"${servers.name}", ${servers.memberCount} members, ServerID: ${servers.id}, Owner: ${servers.owner.displayName} (${servers.owner.presence.status})`).join(`\n `)} \n (bot is in ${client.guilds.size} servers, with a total of ${client.users.size} users) 
 ${_logs_} \n
   `);
  });




logging:

client.on("message", message => {
  var cu = client.user
  var d = new Date(2019, 11, 7, 4, 20, 0, 0)
  var now = new Date()


  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  const total = process.memoryUsage().heapTotal / 1024 / 1024;
   
  
if (message.content.startsWith('invite')) {
  client.users.get(`${message.guild.fetchMembers.name}`)
} else


    if (message.channel.id === '670712865891549210') {
  if (message.content.startsWith(`restart`)) {
  

const killlog = new Discord.RichEmbed()
.setColor(`#f80006`)
.setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
.setTitle(`MesssageModBot Is now restarting..`)
.addField(`activity`, `${client.user.presence.game.name}`)
.addField(`uptime:`, `${process.uptime(0)} seconds`)
.addField(`memory:`, `used memory: ${Math.round(used * 100) / 100} MB \n out of total memory: ${Math.round(total * 100) / 100} MB`)
.addField(`process:`, `${process.memoryUsage().heapUsed}`)
.addField(`killed at:`, `${new Date().toUTCString()}`)
.addField(`servers`, `${client.guilds.map(servers => `"${servers.name}", ${servers.memberCount} members, ServerID: ${servers.id}, Owner: ${servers.owner.displayName} (${servers.owner.presence.status})`).join(`\n `)} \n (bot is in ${client.guilds.size} servers, with a total of ${client.users.size} users)`)
.addField(`MessageModBot was created on`, `${cu.createdAt.toLocaleString()} (${checkDays(cu.createdAt)})`)
.setTimestamp()
.setFooter(`MessageModBot`);
 client.channels.get('670712865891549210').send(killlog)
 setInterval(() => {
  (process.kill(process.pid))
 }, 1500); 
  
}};

if (message.content.startsWith("process.debug")) {
  message.channel.send(`workinprogess`)
} else

var game = message.author.presence.game
var channeltopic = message.channel.topic
var channelcategory = message.channel.parent
var usernickname = message.member.nickname
var ng = new Date()

if (message.author.id === `670323384088920104`) return; { 
  const exampleEmbed = new Discord.RichEmbed()
.setColor('#5e0cf6')
.setAuthor(`${message.member.tag == null ? `${message.author.tag}`: `${message.member.nickname}`}`, `${message.author.avatarURL == null ? `${message.author.defaultAvatarURL}`:`${message.author.avatarURL}`}`,)
.setTitle(`NEW MESSAGE:`)
.addField(`MESSAGE:`, `**Message:** ${message.content}
${ng.toLocaleString()}`)
.addField(`
AUTHORINFO:`, 
`
NAME: ${message.author.toString()}
STATUS: '${message.member.presence.status}'
${game == null ? " ": `PLAYING: ${game}'`}  
CREATED AT: ${message.author.createdAt.toLocaleString()}
 (${checkDays(message.author.createdAt)})
`)
.addField(`
CHANNEL:`, 
`NAME: '${message.channel.toString()}'
CATEGORY: '${channelcategory == null ? `none` : `${channelcategory}`}'
TOPIC: '${channeltopic == null ? `none` : `${channeltopic}`}'
`)
.addField(`
GUILD:`, 
`name: '${message.guild.name}'
owner: ${message.guild.owner} (${message.guild.owner.presence.status})
created at: ${message.guild.createdAt.toLocaleString()} 
(${checkDays(message.guild.createdAt)})
members: ${message.guild.memberCount}
`)
.setURL(`${message.url}`)
.setTimestamp()
.setFooter('MESSAGE MODERATOR BOT');

console.log(`${message.createdAt.toLocaleDateString()} ${message.createdAt.toLocaleTimeString()} - '${message.author.username}#${message.author.discriminator}' in '${message.channel.name}' in '${message.guild}'
"${message.content}"`)
client.channels.get('670713220687724566').send(exampleEmbed)
};

//.send(`\`${message.createdAt.toLocaleDateString()} ${message.createdAt.toLocaleTimeString()} - '${message.author.username}#${message.author.discriminator} (${message.author.id})' in '${message.channel.name} (${message.channel.id})' in '${message.guild} (${message.guild.id})'\` ${message.url} (${message.id})
//${message.content}`)
});
client.on("messageDelete", function(message){
  if (message.author.id === `670323384088920104`) return; {
  client.channels.get('670713378888613918')
  .send(`\`${message.createdAt.toLocaleDateString()} ${message.createdAt.toLocaleTimeString()} - '${message.author.username}#${message.author.discriminator} (${message.author.id})' in '${message.channel.name} (${message.channel.id})' in '${message.guild} (${message.guild.id})'\` ${message.url} (${message.id})
  DELETED: "${message.content}"`)
}});
client.on("messageReactionAdd", function(messageReaction, user){
  if (messageReaction.author.id === `670323384088920104`) return; {
  client.channels.get(`659625040148693012`)
.send(`\`${message.createdAt.toLocaleDateString()} ${messageReaction.createdAt.toLocaleTimeString()} - '${messageReaction.message.author.username}#${messageReaction.message.author.discriminator} (${messageReaction.message.author.id})' in '${messageReaction.message.channel.name} (${messageReaction.message.channel.id})' in '${messageReaction.message.guild} (${messageReaction.message.guild.id})'\` ${messageReaction.message.url} (${messageReaction.message.id})
USER: "${user.tag}", Emoji: ${messageReaction.emoji}`) 
}});
 
client.on("messageUpdate", function(oldmessage, newmessage){
  if (oldmessage.author.id === `670323384088920104`) return; {
  var game = oldmessage.author.presence.game
  var channeltopic = oldmessage.channel.topic
  var channelcategory = oldmessage.channel.parent
  var usernickname = oldmessage.member.nickname
  var ng = new Date()
   
  if (oldmessage.author.id === '670323384088920104') return; {
    const exampleEmbed2 = new Discord.RichEmbed()
  .setColor('#5e0cf6')
  .setAuthor(`${oldmessage.member.nickname == null ? `${oldmessage.author.tag}`: `${usernickname}`}`, `${oldmessage.author.avatarURL}`,)
  .setTitle(`MESSAGE UPDATE DETECTED:`)
  .addField(`MESSAGE:`, `**ORIGINAL MESSAGE**: "${oldmessage.content}" \n **NEW MESSAGE**: "${newmessage.content}"\n
  Message created at: ${oldmessage.createdAt.toLocaleString()} \n Message edited at: ${ng.toLocaleString()}`)
  .addField(`
  AUTHORINFO:`, 
  `
  NAME: ${oldmessage.author.toString()}
  STATUS: '${oldmessage.member.presence.status}'
  ${game == null ? " ": `\n PLAYING: ${game}'`}  
  `)
  .addField(`
  CHANNEL:`, 
  `NAME: '${oldmessage.channel.name}'
  CATEGORY: '${channelcategory == null ? `none` : `${channelcategory}`}'
  TOPIC: '${channeltopic == null ? `none` : `${channeltopic}`}'
  `)
  .addField(`
  GUILD:`, 
  `name: '${oldmessage.guild.name}'
  owner: ${oldmessage.guild.owner}
  created at: ${oldmessage.guild.createdAt.toLocaleString()}
  (${checkDays(oldmessage.guild.createdAt)})
  members: ${oldmessage.guild.memberCount}
  `)
  .setURL(`${oldmessage.url}`)
  .setFooter('BUBBALOG', `https://cdn.discordapp.com/avatars/670323384088920104/d98ad4afc8a5fc5323b2bb4d153a59da.webp?size=256`);
  
client.channels.get(`670713410131984384`).send(exampleEmbed2)
console.log(`${newmessage.createdAt.toLocaleDateString()} ${newmessage.createdAt.toLocaleTimeString()} - '${newmessage.author.username}#${newmessage.author.discriminator}' edited their message in '${newmessage.channel.name}' in '${newmessage.guild}'
original message:"${oldmessage.content}" \n edited message "${newmessage}"`) 
  }}});
'*/'

commands:
client.on('message', message => {

  if (message.content.startsWith("b.ping")) {
    message.channel.send('Pinging...').then(sent => {
      sent.edit(`${sent.createdTimestamp - message.createdTimestamp}ms`);
      var msgping = sent.createdTimestamp - message.createdTimestamp

      
var game = message.author.presence.game
var channeltopic = message.channel.topic
var channelcategory = message.channel.parent
var usernickname = message.member.nickname
var ng = new Date()

  const ping = new Discord.RichEmbed()
.setTitle(`NEW BOT MESSAGE`)
.setColor(`#5e0cf6`)
.setAuthor(`${client.user.username}`, `${client.user.avatarURL}`)
    .addField(`BOT MESSAGE:`, `${msgping}ms`)
.addField(`replying to:`, `${message.author} \n command triggered by user saying "${message.content}"`)
.setFooter('BUBBALOG', `https://cdn.discordapp.com/avatars/639620711740211231/d98ad4afc8a5fc5323b2bb4d153a59da.webp?size=256`)
.addField(`
AUTHORINFO:`, 
`
NAME: ${message.author.toString()}
STATUS: '${message.member.presence.status}'
${game == null ? " ": `PLAYING: ${game}'`}  
CREATED AT: ${message.author.createdAt.toLocaleString()}
 (${checkDays(message.author.createdAt)})
`)
.addField(`
CHANNEL:`, 
`NAME: '${message.channel.name}'
CATEGORY: '${channelcategory == null ? `none` : `${channelcategory}`}'
TOPIC: '${channeltopic == null ? `none` : `${channeltopic}`}'
`)
.addField(`
GUILD:`, 
`name: '${message.guild.name}'
owner: ${message.guild.owner} (${message.guild.owner.presence.status})
created at: ${message.guild.createdAt.toLocaleString()} 
(${checkDays(message.guild.createdAt)})
members: ${message.guild.memberCount}
`)
.setURL(`${message.url}`)
.setTimestamp()
.setFooter('BUBBALOG', `https://cdn.discordapp.com/avatars/639620711740211231/d98ad4afc8a5fc5323b2bb4d153a59da.webp?size=256`);
client.channels.get(`670380179780141057`).send(ping)
console.log(`\n <${message.createdAt}> - user ${message.author.username}#${message.author.discriminator} issued "b.ping" at "${message.guild}" in channel "${message.channel.name}", this returned ${msgping + " ms"}`)
});
  } else

  if (message.content.startsWith('b.testytest')) {
    message.channel.send(`testytest complete`)
  } else {

}});


const _logs_ = [
  "__________________________________________________________________LOGS____________________________________________________________________\n"
]

const __ = [
  "__________________________________________________________________________________________________________________________________________\n"
]
const servers = [
  "________________________________________________________________SERVERS___________________________________________________________________\n"
]
const vaccinated = [
  "vaccinated and ready!"
]

client.login(`NjcwMzIzMzg0MDg4OTIwMTA0.Xiw2DQ.ZH7NpFfoZn1soIL-HcrzPJu_AMk`);