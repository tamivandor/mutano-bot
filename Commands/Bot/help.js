module.exports = ({
    name: "help",
    description: "Lista de Comandos do Mutano™",
    aliases: ["h","ajuda","cmds","comandos","commands"],
    code: `
$if[$getServerVar[lang]==pt]
$thumbnail[$userAvatar[763109929300262953]]
$title[Lista de Comandos]
$description[\`\`\`Abaixo se encontram meus comandos e as descrições deles. Espero que goste!\`\`\`
\`💚\` Obrigado por me utilizar :3

**Ao total tenho: $sub[$commandsCount;4] Comandos**

\`🐯\` __**BOT**__
\`help\` | \`botinfo\` | \`tech-botinfo\` | \`invite\` | \`setlang\` | \`setprefix\` | \`ping\` | \`status\` | \`versão\` | \`uptime\`

\`😂\` __**ENTRETENIMENTO**__
\`say\` | \`8ball\` | \`jockey-pô\` | \`ship\` | \`piada\` | \`pressf\` | \`gay\` | \`gado\` | \`abraçar\` | \`youtube\` | \`beijar\`

\`🌄\` __**IMAGENS**__
\`trash\` | \`drake\` | \`impostor\` | \`poof\` | \`stonks\` | \`triggered\` | \`trump\` | \`pixel\` | \`sepia\` | \`grey\` | \`blurple\` | \`negativo\` | \`prisao\` | \`circulo\`

\`🔨\` __**CONFIGURÁVEIS**__
\`set-anuncios\`

\`📰\` __**UTILITÁRIOS**__
\`serverinfo\` | \`avatar\` | \`invert\` | \`shortlink\` | \`userinfo\` | \`channelinfo\`

\`👮‍‍️\` __**MODERAÇÃO**__
\`clear\` | \`anunciar\`

Gostou? Teve dúvidas? Entre no meu servidor de suporte usando \`$getServerVar[chamada]suporte\`]
$footer[Help solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;️🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$thumbnail[$userAvatar[763109929300262953]]
$title[Command List]
$description[\`\`\`You can check my commands and their descriptions right below. I hope you enjoy!\`\`\`
\`💚\` I lov u for using me! :3

**I have: $sub[$commandsCount;4] Commands**

\`🐯\` __**BOT**__
\`help\` | \`botinfo\` | \`tech-botinfo\` | \`invite\` | \`changelang\` | \`setprefix\` | \`ping\` | \`stats\` | \`version\` | \`uptime\`

\`😂\` __**ENTERTAINMENT**__
\`say\` | \`8ball\` | \`jockey-pô\` | \`ship\` | \`joke\` | \`pressf\` | \`gay\` | \`cattle\` | \`hug\` | \`youtube\`

\`🌄\` __**IMAGES**__
\`trash\` | \`drake\` | \`imposter\` | \`poof\` | \`stonks\` | \`triggered\` | \`trump\` | \`pixelate\` | \`sepia\` | \`greyscale\` | \`blurple\` | \`negative\` | \`jail\` | \`circle\`

\`🔨\` __**CONFIGURABLES**__
\`set-announcements\`
 
\`📰\` __**UTILS**__
\`serverinfo\` | \`avatar\` | \`invert\` | \`shortener\` | \`userinfo\` | \`channelinfo\`

\`👮‍‍️\` __**MODERATION**__
\`clear\` | \`announce\`

Did you like it? Did you have any doubts? Login to my support server using \`$getServerVar[chamada]support\`]
$footer[Help asked by $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})
