module.exports = ({
    name: "youtube",
    description: "Quer assistir YouTube no Discord pelo computador? Vamos!",
    aliases: ["yt"],
    code: `
    $djsEval[const { DiscordTogether } = require('discord-together');
    
    client.discordTogether = new DiscordTogether(client);
    client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
     return message.channel.send(":youtube:・**Aqui está o seu convite para assistir o YouTube:** " + invite.code)
     });]
    $else
    Não encontrei nada
    $endif
    $onlyIf[$voiceID!=;\:x:・Você não está conectado em um canal de voz]
    $onlyIf[$hasPerms[$authorID;speak]==true;\:x:・Você não tem permissão para falar]
    $onlyIf[$getServerVar[lang]==en;]
    `
})