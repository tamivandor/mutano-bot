module.exports = ({
    name: "tech",
    description: "Saiba as informações detalhadas e técnicas do Mutano™ :3",
    aliases: ["techinfo", "tech-info", "bot-techinfo", "botinfo tec", "tecinfo", "tec-info", "tech-botinfo", "techbotinfo", "techbi"],
    code: `
$apiMessage[$channelID;;{thumbnail:$userAvatar[763109929300262953]}{title:Minhas Informações}{description:Tag: \`$userTag[763109929300262953]\`
ID: \`763109929300262953\`
\`\`\`Olá $username tudo bem? Espero que sim. Se você chegou até aqui e está querendo ver mais informações, certamente você têm algum conhecimento prévio do que vai tratar abaixo, ou se somente ficou curioso para saber mais detalhes sobre mim, sobre partes mais técnicas e detalhadas. Tudo isso, você encontra aqui :)\`\`\`

Para mais informações use: \`$getServerVar[chamada]versão\` para ver minha versão, \`$getServerVar[chamada]ping\` para ver minha latência \`$getServerVar[chamada]status\` e \`$getServerVar[chamada]uptime\` para ver minha status e meu uptime...

Gostou? Teve dúvidas? Entre no meu servidor de suporte usando \`$getServerVar[chamada]suporte\`

Ao total, $getVar[allUsedCmdsGlobal] comandos foram executados em mim

__**Dados de Armazenamento e Velocidade**__
<:database:880841159537201162>・Banco de Dados: \`MongoDB\`
<:host:880842799979851826>・Hospedagem: \`Heroku\`
<:CPU:880845389295681610>・CPU: \`$cpu%\`
<:memory_ram:880845487861825557>・Memória RAM: \`$ramMB\`

__**Fui feito em:**__
<:javascript:880848223185551431>・[Aoi.js](https://aoi.js.org/) na linguagem [JavaScript](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript) usando [Node.js](https://nodejs.org/pt-br/about/)

__**Versões**__
<:package:880845544250032209>・PackageLib: \`$packageVersion\`
<:nodejs:880848360838418512>・Node.js: \`$nodeVersion\`

__**Minhas Datas**__
・Fui criado: \`06 de outubro de 2020 às 15 horas 46 minutos e 25 segundos (horário de Brasília - BR)\`
・Estou vivo à: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$clientID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora]\`
・Entrei aqui em: \`$memberJoinedDate[$clientID]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$clientID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])

__**DESENVOLVEDORES**__
\`$username[852616816240885760]#$discriminator[852616816240885760]\` | \`852616816240885760\` | [GitHub - guihrib](https://github.com/guihrib)
\`$username[857836846641578014]#$discriminator[857836846641578014]\` | \`857836846641578014\` | [GitHub - KrulDev](https://github.com/KrulDev)
\`$username[711969991427227729]#$discriminator[711969991427227729]\` | \`711969991427227729\` | [GitHub - Bayziofc](https://github.com/Bayziofc)
\`$username[683728874390945823]#$discriminator[683728874390945823]\` | \`683728874390945823\` | [GitHub - VoidZin14](https://github.com/VoidZin14)}{footer:Solicitado por $username}{color:#1ad46d};{actionRow:WebSite Oficial,2,5,$replaceText[https://mutanobot.site/;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})
