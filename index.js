const Discord = require('discord.js')



const client = new Discord.Client({
    intents: ['Guilds', 'GuildMessages', 'MessageContent']
}) // Create new client (discord says client instead of user)


client.on('messageCreate', async message => {

    if (!message.content.startsWith("!")) return; // if message doesnt start with ! return with nothing
    let args = message.content.slice(1).split(" ")
    let command = args.shift()

    if (command === 'ping') {
        message.channel.send("pong")

    } else if (command === 'change') {

        message.channel.send("Changing your role color...")


        let string = ''
        string = string + String(Math.floor(Math.random() * 9))
            string = string + String(Math.floor(Math.random() * 9))
            string = string + String(Math.floor(Math.random() * 9))
            string = string + String(Math.floor(Math.random() * 9))
            string = string + String(Math.floor(Math.random() * 9))
            string = string + String(Math.floor(Math.random() * 9))


        message.member.roles.cache.first().setColor(string)
    }

    else if (command === 'button') {

        const row = new Discord.ActionRowBuilder().addComponents([new Discord.ButtonBuilder().setLabel("Test").setStyle("Success").setCustomId('1')])

        const m = await message.channel.send({content: "Hi", components: [row]})

        const filter = i => i.user.id === message.author.id
        const collector = m.createMessageComponentCollector({filter, time: 50000})
        collector.on("collect", i => {
            if (i.customId === '1') {
                i.reply("You pressed the button!")
            }
        })


    }

})


client.on('ready', () => {
    console.log("Bot started")
})


client.login(token)// put bot token here