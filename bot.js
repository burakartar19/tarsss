const Discord = require("discord.js")
const client = new Discord.Client()
const işaret = require("./işaret.json")

var prefix = işaret.prefix

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("Aleyküm Selam Hosgeldin");
    }
  })

  client.on("message", msg => {
    if (msg.content.toLowerCase() === prefix + "kurallar") {
      msg.reply("Tüm Kurallar #kurallar Kanalında Mevcut");
    }
  })

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "naber bot") {
      msg.reply("İyi senden naber");
    }
  })

client.login('MTA0MTc0MDU5MTE0NDM4MjU2Nw.GlwA3G.Lcs1y9tUtOQMiHMApDJuTpT1TeRDfasByBEQcQ')