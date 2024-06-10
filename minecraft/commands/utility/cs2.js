const config = require('../../config.json');
const { SlashCommandBuilder } = require('discord.js');
const { GameDig } = require('gamedig'); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cs2')
        .setDescription('Status for cs2 server'),
    async execute(interaction) {
        const serverInfo = {
            type: 'csgo', // Since CS2 is similar to CS:GO in terms of server query
            host: '193.33.176.26', // Replace with your server's IP address
            port: 27140 // Default port, change if necessary
        };
        try{

            GameDig.query(serverInfo)
            .then((state) => console.log('Status:', state))
            interaction.reply("**CS2 Server Status**\n Server is online")
        }catch(error){
            console.log(error)
            interaction.reply("**CS2 Server Status**\n Server is ofline")
        }
            
    },
};