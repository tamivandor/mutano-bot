module.exports = ({
    name: "circle",
    description: "Cortando bem redondinha sua imagem :)",
    aliases: ["circulo", "círculo"],
    code: `
$if[$getServerVar[lang]==pt]
$image[https://api.berk404.ga/circle?image=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png];gif;png]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$image[https://api.berk404.ga/circle?image=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png];gif;png]
$footer[Asked by $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})