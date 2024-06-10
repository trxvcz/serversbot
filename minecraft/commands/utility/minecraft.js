const util = require('minecraft-server-util');
const config = require('../../config.json');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Status for minecraft server'),
    async execute(interaction) {
        try {
            const util = require('minecraft-server-util');

            const options = {
                timeout: 1000 * 5, // timeout in milliseconds
                enableSRV: true // SRV record lookup
            };

            util.status('localhost', 25565, options)
                .then((result) => console.log(result))
            interaction.reply('**Minecraft Server Status**\nServer is online.')
        } catch (error) {
            console.log(error)
            await interaction.reply('**Minecraft Server Status**\nServer is offline.');
        }
    },
};