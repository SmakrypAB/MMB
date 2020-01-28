const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });


module.exports = {
    name: 'ping',
    execute(message,) {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`${sent.createdTimestamp - message.createdTimestamp}ms`);
            
            logging:
            var msgping = sent.createdTimestamp - message.createdTimestamp
            var game = message.author.presence.game
            var channeltopic = message.channel.topic
            var channelcategory = message.channel.parent
            var usernickname = message.member.nickname
            var ng = new Date()
            
              const ping = new Discord.RichEmbed()
            .setTitle(`NEW BOT MESSAGE`)
            .setColor(`#5e0cf6`)
            .setAuthor(`MessageModBot`, `${client.user.avatarURL}`)
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
     })
    }
}