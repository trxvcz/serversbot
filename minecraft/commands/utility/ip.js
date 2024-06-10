const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Shows ip of server'),
    async execute(interaction) {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            const publicIp = response.data.ip;
            interaction.reply(`The public IP address of the server is: ${publicIp}`);
        } catch (error) {
            console.error(error);
            interaction.reply('Unable to fetch the public IP address.');
        }
    },
};
