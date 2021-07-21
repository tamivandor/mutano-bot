const express = require('express');
const app = express();
const Discord = require("discord.js")

var client
var bot

module.exports = (bota) => {
  
  client = bota.client
  bot    = bota

}

app.get("/users/:id", async(req, res) => {
  
  let { id } = req.params
  
  if(id === "@me") {

    res.json(client.user)
    
  }
  
})

app.get("/users/:id/version", async(req, res) => {
  
  let { id } = req.params
  
  if(id === "@me") {

    res.json(client.variables.version)
    
  }
  
})

app.post("/users/:id/guilds", async(req, res) => {
  
  let { id } = req.params
  
  if(id === "@me") {

    res.json(client.guilds.cache)
    
  } else {
    
    require("raw-body")(req, {}, async(err, body) => {
      
      let data = JSON.parse(body.toString("utf8"))
  
        const perms  = Discord.Permissions;
        const guilds = []
  
          data.forEach(guild => {
    
            const permsOnGuild = new perms(guild.permissions);
            if (!permsOnGuild.has("MANAGE_GUILD")) return;
    
            if(client.guilds.cache.get(guild.id)) {
              let g = client.guilds.cache.get(guild.id)
                  
              guilds.push(g)
            } else {
      
            }
    
          })
          
          res.json(guilds)
          
    })
    
  }
  
})

app.get("/users/:id/avatar", async(req, res) => {
  
  let { id } = req.params
  
  if(id === "@me") {

    res.json(client.user.avatarURL({ size: 4096 }))
    
  } else {
    
    res.json(client.users.cache.get(id).avatarURL({ dynamic: true, size: 4096 }))
    
  }
  
})

app.get("/users/:id/banner/:extension/:size", async(req, res) => {
  
  let { id, extension, size } = req.params
  let banner

  if(id === "@me") {

    require('node-fetch')('https://discord.com/api/v9/users/763109929300262953', {
      headers: { 
        Authorization: 'Bot '+client.token
      }
    }).then(a => a.json()).then(b => res.send(`<script> window.location.href = https://cdn.discordapp.com/banners/763109929300262953/${b.banner}.${extension || 'png'}?size=${size || 2048} </script>`))
    
  } else {
    
    require('node-fetch')(`https://discord.com/api/v9/users/${id}`, {
      headers: { 
        Authorization: 'Bot '+client.token
      }
    }).then(a => a.json()).then(b => res.send(`<script> window.location.href = https://cdn.discordapp.com/banners/${id}/${b.banner}.${extension || 'png'}?size=${size || 2048} </script>`))

  }
  
})

app.get("/status", async(req, res) => {
 
  let servidores = client.guilds.cache.size
  let users      = client.guilds.cache
        .map((g) => g.memberCount || 0)
        .reduce((x, y) => x + y, 0)
  let channels   = client.guilds.cache
        .map((g) => g.channels.cache.size || 0)
        .reduce((x, y) => x + y, 0)
  let commands = client.bot_commands.array().length
 
  res.json({ servidores, users, channels, commands })
  
})
app.get("/banner", async(req, res) => {
    let banner = "https://media.discordapp.net/attachments/860238066542182441/867136009652142150/6dkZEcUh.jpg"
res.json({ banner })
})

app.get("/commands", async(req, res) => {

  let commands = client.bot_commands.array()
 
  res.json(commands)
  
})

app.post("/guilds/:guildID/prefixo", async(req, res) => {
  
  let { guildID } = req.params
  
  require("raw-body")(req, {}, async(err, body) => {
      
    let data = JSON.parse(body.toString("utf8"))
    
    client.db.set("main", `chamada_${guildID}`, data.prefix)
    
  })
  
  res.status(200)
  
})

app.listen(25567)
