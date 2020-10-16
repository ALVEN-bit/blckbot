require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
////////////////mrfix

// ======== { • const • }======== //
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp"); ////////////////mrfix
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const prefix = "2!";
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  //  ========(  muti )==========   //

  client.on("message", message => {
    if (message.content.startsWith(`2!mute`)) {
      if (message.member.hasPermission("ADMINISTRATOR")) {
        let role = message.guild.roles.find(r => r.name === "Muted");
        let member = message.mentions.members.first();
        if (member) {
          member.removeRoles(member.roles);
          member.addRole(role).catch(console.error);
          message.channel.send(`${member} has been muted!`);
        } else {
          message.channel.send("تکایە ناوی بەکارهێنەرەکە بنووسە");
        }
      } else {
        message.channel.send("ببورە تۆ ڕۆڵت نیە بەتەمای چی");
      }
    }
  });
  client.on("message", message => {
    if (message.content.startsWith(`2!unmute`)) {
      if (message.member.hasPermission("ADMINISTRATOR")) {
        let member = message.mentions.members.first();
        let role = message.guild.roles.find(r => r.name === "Muted");
        if (member) {
          member.removeRole(role).catch(console.error);
          message.channel.send(`${member} has been unmuted!`);
        } else {
          message.channel.send("تکایە ناوی بەکارهێنەرەکە بنووسە");
        }
      } else {
        message.channel.send("ببورە تۆ ڕۆڵت نیە بەتەمای چی");
      }
    }
  });
  //   ===============[ WELCOME - LEFT ]=============  //

  client.on("guildMemberAdd", member => {
    let channel = member.guild.channels.find("name", "┃welcome");
    let memberavatar = member.user.avatarURL;
    if (!channel) return;
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(memberavatar)
      .addField(
        ":bust_in_silhouette: | Welcome!",
        `__**بــەخــێــربــێــی بــۆ ســێــرڤــەربــە هــیــوای کــاتــێــکــی خــۆش, ${member}**__`
      )
      .addField(":◈━━━━━━━━❮◈❯━━━━━━━━◈:")
      .addField(
        "__**:id: | ئــەکــاونــتــت :**__",
        "**[" + `${member.id}` + "]**"
      )
      .addField(
        "__**:family_mwgb: | تــۆ کــەســی ژمــارە : **__ ",
        `${member.guild.memberCount}`
      )
      .addField(
        "__**📍 | نــاوی مــیــمــبــەر:**__",
        `<@` + `${member.id}` + `>`,
        true
      )
      .addField(
        "__**🔰 | نــاوی ســێــرڤــەر : **__",
        `${member.guild.name}`,
        true
      )
      .setImage(
        "https://media.discordapp.net/attachments/678300317745414165/679375773832052737/image0.gif"
      )
      .setTimestamp();

    channel.sendEmbed(embed);
  });
  client.on("guildMemberRemove", member => {
    let channel = member.guild.channels.find("name", "┃left");
    let memberavatar = member.user.avatarURL;
    if (!channel) return;
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(memberavatar)
      .addField("نــاو:", `${member}`)
      .addField("رۆیــشــت لــە ســێــرڤــەر", ";(")
      .addField(
        "ســێــرڤــەر مــاوە",
        `${member.guild.memberCount}` + " مــێــمــبــەر"
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/755636694035857438/758974172658663424/20200923_140354.gif"
      )
      .setFooter(`${member.guild.name}`)

      .setTimestamp(695838737392861254);

    channel.sendEmbed(embed);
  });

  //  =================(  invit  )===================  //

  client.on("guildMemberAdd", member => {
    member.guild.fetchInvites().then(guildInvites => {
      const gamer = invite[member.guild.id];
      invite[member.guild.id] = guildInvites;
      const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
      const inviter = client.users.get(invite.inviter.id);
      const welcome = member.guild.channels.find(
        channel => channel.name === "┃invite" ///ناوی چەنال لێرە دانێ
      );
      welcome.send(
        `<@${member.id}> **joined:** Invite By <@${inviter.id}> (${invite.uses} invites)`
      );
    });
  });
  //  =========  [  striming ]  ========  //

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(`Online In Servers : ${client.guilds.size} `);

  let statuses = [
    `2!help | KURD CODING`,

    `2!help | Servers : ${client.guilds.size} | Users ${client.users.size} `
  ];

  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];

    client.user.setActivity(STREAMING, {
      type: "playing",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

// //===============================================[ •help• ]=============================================\\\\
client.on("message", m => {
  if (m.content === prefix + "help") {
    let Dashboard = `
__کۆماندەکانی ئۆنەر شیپ__ 🔻

> 2!anti ban [number]
> 2!anti kick [number]
> 2!anti channel [number]
> 2!anti role [number]
> 2!anti time [number]
> 2!anti bots [on / off]
> 2!settings

__کۆماندەکانی ئەدمین__ 🔻

> 2!lock
> 2!unlock
> 2!ban
> 2!kick
> 2!mute
> 2!unmute
> 2!say
> 2!bc
> 2!giveaway
> 2!day
> 2!clear

__ژورەکان بەم شێوەیە لێبکە__🔻                                           .

> ┃welcome
> ┃left
> ┃invite

__کۆماندی ئاسای__ 🔻                                         

> 2!bots
> 2!invite
> 2!about
> 2!server
> 2!user
> 2!wara
> 2!avatar
> 2!image
> 2!report

> Best Discord __Anti Spam__.
> Best Discord __Anti Link & jnew__.
> Best Discord __Anti Here & Everony __:`;
    var addserver = ``;
    var SUPPORT = `https://discord.gg/stfX2EN`;
    let embed = new Discord.RichEmbed()
      .setTitle(`${m.author.username}`)
      .setDescription(
        `**${Dashboard}**
  **[Add To Your Server ](${addserver})** | **[ Server Support](${SUPPORT})**`
      )
      .setImage("");
    m.channel.send(embed);
  }
});
// ======== { • lock unlock • }======== //

client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }); ////////////////mrfix
    message.channel.send(` **بە سەرکەوتوی داخرا.**`);
  }
});
////////////////mrfix
client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    });
    message.channel.send(` **بە سەرکەوتوی کرایەوە**`);
  }
});

client.on("message", message => {
  if (message.content.startsWith(`2!ban`)) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first();

      if (member) {
        member
          .ban("Optional reason for the audit logs")
          .then(() => {
            message.channel.send(`بە سەرکەوتووی باند کرا ${member}`);
          })
          .catch(err => {
            message.channel.send(
              "من ناتوانم بەکارهێنەرەکە باند بکەم . تکایە سەیری پلەبەندی بکە."
            );

            console.error(err);
          });
      } else {
        message.channel.send("تکایە ئاماژە بە بەکارهێنەرکە بکە!");
      }
    }
  }
});

//  ======  [  avatar  ]  =======  //

client.on("message", message => {
  const mm = message.mentions.members.first() || message.member;
  if (message.content.startsWith(prefix + "avatar")) {
    const embed = new Discord.RichEmbed()
      .setAuthor(mm.user.tag, mm.user.avatarURL)
      .setTitle("ئەمە لینکی وێنەکەتە")
      .setURL(mm.user.avatarURL)
      .setImage(mm.user.avatarURL)
      .setFooter(
        `Requested By : ${message.author.tag}`,
        message.author.avatarURL
      );
    message.channel.send(embed);
  }
});

//   ======= ( inmage )  ======  //

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "image") {
    const embed = new Discord.RichEmbed()

      .setTitle(`ئەمە وێنەی سەر ئەم سێرڤەرەیە!`)
      .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor(0x164fe3)
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
      .setTimestamp();

    message.channel.send({ embed });
  }
});

// ======== [ kick ]  ========= //

client.on("message", message => {
  if (message.content.startsWith(`2!kick`)) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first();

      if (member) {
        member
          .kick("Optional reason for the audit logs")
          .then(() => {
            message.channel.send(`بە سەرکەوتوی کیک کرا ${member}`);
          })
          .catch(err => {
            message.channel.send(
              "من ناتوانم بەکارهێنەرەکە کیک بکەم .تکایە سەیری پلەبەندی بکە."
            );

            console.error(err);
          });
      } else {
        message.channel.send("تکایە ئاماژە بە بەکارهێنەرەکە بکە!");
      }
    }
  }
});
// ======== { • invite • }======== //
client.on("message", message => {
  if (message.content.startsWith(`${prefix}invite`)) {
    var embed = new Discord.RichEmbed()

      .setTitle("__**بۆ راکێشانی بووتەکە کلیک لەم تێکستە شینە بکە**__")

      .setURL("")

      .setTimestamp()

      .setFooter(`Requested By | ${message.username}`)

      .setImage("")

      .setColor("RANDOM");

    message.channel.send({ embed });
  }
});
// ======== { • bot • }======== //

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "about") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        "**بوت پینگ** : ",
        `» ${Date.now() - message.createdTimestamp}` + "خێرای خەت",
        true
      )
      .addField("**سێرڤەر** :  ", `» ${client.guilds.size}`, true)
      .addField("**چەناڵ** : ", `» ${client.channels.size} `, true)
      .addField("**میمبەر** : ", `» ${client.users.size} `, true)
      .addField("**ناوی بوت** :  ", `» ${client.user.tag} `, true)
      .addField("**دروستکەر بوت** :  ", `» <@744471904538067065>`, true) // تعديل مهم BlackStormذا الرقم لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(bot);
  }
});

// ======== { • server • }======== //
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:✽** ئایدی سێرڤەر:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:✽** درووست کراوە لە**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(
        ":crown: ✽**درووستکەری سێرڤەر**",
        `**${message.guild.owner}**`,
        true
      )
      .addField(
        `✽** میمبەرەکان ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:✽** چەناڵەکان **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TexT | VoicE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:✽** کیشوەر **", ` ${message.guild.region}`, true)
      .setImage("")
      .setColor("RANDOM");
    message.channel.sendEmbed(embed);
  }
});
// ======== { • bo jaw • }======== //
client.on("guildCreate", guild => {
  client.channels.get("763105472840204288")
    .send(`☑️ **${client.user.tag}بۆتەکە ڕاکێشریایە ئەم سێرڤەرە 🔻
                                        
Server name: __${guild.name}__

Server owner: __${guild.owner}__

Server id: __${guild.id}__ 

Server Count: __${guild.memberCount}__**`);
});

client.on("guildDelete", guild => {
  client.channels.get("763105472840204288")
    .send(`❎ **${client.user.tag} سێرڤەرەکەی بە جێ ھێشت

Server name: __${guild.name}__

Server owner: __${guild.owner}__

Server id: __${guild.id}__ 

Server Count: __${guild.memberCount}__**`);
});
// ======== { • allbots • }======== //
client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  if (message.content === prefix + "bots") {
    let i = 1;

    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);

    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `${message.author.username}#${message.author.discriminator}`,
        message.author.avatarURL
      )
      .setDescription(
        `Found ${
          message.guild.members.filter(m => m.user.bot).size
        } بووت دۆزرایەوە لە سێرڤەر \n ${botssize.join("\n")}`
      )
      .setFooter(`${client.user.username}`, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});

// ======== { • say • }======== //

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith("2!say")) return;

  let command = message.content.split("2!say")[0];
  command = command.slice("");

  let args = message.content.split("2!say").slice(1);
  if (command === "2!say") {
    if (!message.channel.guild)
      return message.channel
        .send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("SEND_MESSAGES"))
      return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join("*e"));
  }

  if ("2!say") {
    if (!message.channel.guild)
      return message.channel
        .send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join(" "))
      .setColor(0x23b2d6)
      .setImage(
        "https://cdn.discordapp.com/attachments/728333268918861845/729754125847232552/image0-2.gif"
      );
    message.channel.sendEmbed(say);
    message.delete();
  }
});

//  ===== [  ]  =====  //

client.on("message", async message => {
  const moment = require("moment");
  const ms = require("ms");
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }
  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "giveaway")) {
    let embed1 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Missing the following permission `MANAGE_GUILD`");

    let embed2 = new Discord.RichEmbed()
      .setColor()
      .setDescription("تکایە ناوی  `ژورەکە` بنوسە ");

    let embed3 = new Discord.RichEmbed()
      .setColor()
      .setDescription("دڵنیاببەوە لە ژورەکە");

    let embed4 = new Discord.RichEmbed()
      .setColor()
      .setDescription("تکایە `کاتەکە`دیاری بکە");

    let embed5 = new Discord.RichEmbed()
      .setColor()
      .setDescription(
        "دڵنیا ببەوە لە کاتەکە بۆ نموونە : 1s / 1m / 1h / 1d / 1w"
      );

    let embed6 = new Discord.RichEmbed()
      .setColor()
      .setDescription("تکایە `دەستکەوتەکە `دیاری بکە");

    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(embed1);
    message.channel.send(embed2).then(msg => {
      message.channel
        .awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
          let room = message.guild.channels.find(
            gg => gg.name === collected.first().content
          );
          if (!room) return message.channel.send(embed3);
          room = collected.first().content;
          collected.first().delete();
          msg.edit(embed4).then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (!collected.first().content.match(/[1-60][s,m,h,d,w]/g))
                  return message.channel.send(embed5);
                duration = collected.first().content;
                collected.first().delete();
                msg.edit(embed6).then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 20000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      title = collected.first().content;
                      collected.first().delete();
                      msg.delete();
                      message.delete();
                      try {
                        let giveEmbed = new Discord.RichEmbed()
                          .setColor()
                          .setTitle(`${title}`)
                          .setDescription(
                            `پەنجە لەم ئیمۆجیە بدە 🎉 بۆ بەشداری کردن! \nکاتی ماوە  : ${duration} \n **داندراوە لە :** ${hours}:${minutes}:${seconds} ${suffix}`
                          );
                        message.guild.channels
                          .find(gg => gg.name === room)
                          .send(" :tada: **Giveaway** :tada:", {
                            embed: giveEmbed
                          })
                          .then(m => {
                            let re = m.react("🎉");
                            setTimeout(() => {
                              let users = m.reactions.get("🎉").users;
                              let list = users
                                .array()
                                .filter(
                                  u => (u.id !== m.author.id) !== client.user.id
                                );
                              let gFilter =
                                list[
                                  Math.floor(Math.random() * list.length) + 1
                                ];
                              if (gFilter === undefined) {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(
                                    `Winners : no enough number of reaction so there is no winner`
                                  )
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              } else {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(`براوە : ${gFilter}`)
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              }
                              if (gFilter === undefined) {
                                // message.guild.channels.find("name" , room).send("No enough number of reactions")
                              } else {
                                message.guild.channels
                                  .find(gg => gg.name === room)
                                  .send(
                                    `**Congratulations ${gFilter}! You won The \`${title}\`**`
                                  );
                              }
                            }, ms(duration));
                          });
                      } catch (e) {
                        message.channel.send(
                          `:heavy_multiplication_x:| **i Don't Have Prem**`
                        );
                        console.log(e);
                      }
                    });
                });
              });
          });
        });
    });
  }
});

// ======== { • user • }======== //

client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("en-TN");
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .addField(
        " کاتی دانانی ئەکاونت : ",
        `${moment(heg.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField(
        " هاتیتە سێرڤەر لە : ",
        `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
          h.joinedAt
        ).fromNow()}\``,
        true
      )
      .setFooter(`${message.author.username}`, "")
      .setThumbnail(heg.avatarURL);
    message.channel.send(id);
  }
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "2!wara") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("جۆینم کرد");
        })
        .catch(console.log);
    } else {
      message.reply("تکایە بچۆ چەنال ڤۆیسێک ئەنجا بەکاری بێنە");
    }
  }
});



//  ========  (  anti bot   )   ========  //
var Enmap = require("enmap");
client.antibots = new Enmap({ name: "chat" });
var antibots = client.antibots;
client.on("message", codes => {
  if (codes.content.startsWith(prefix + "anti bots on")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("ئەنتی بۆت چالاک کرا");
  }
  if (codes.content.startsWith(prefix + "anti bots off")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("ئەنتی بۆت نا چالاک کرا");
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.kick();
});
// ======== { • security • }======== //
const tpoints = {};
const vpoints = {};
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**❌ | تەنها`OwnerShip`دەتوانێ ئەمکارە بکات .**"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send(
          "**❌ | تکایە ژمارەی دوای کۆماندەکە بنووسە .**"
        );
      if (isNaN(num))
        return message.channel.send("**❌ | ژمارەی دوای کۆماندەکە بنووسە.**");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**✔️ |😂 سەرکەوتوو بوو باندکردن نەما : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num)
        return message.channel.send(
          "**❌ | تکایە ژمارەی دوای کۆماندەکە بنووسە .**"
        );
      if (isNaN(num))
        return message.channel.send("**❌ | ژمارەی دوای کۆماندەکە بنووسە.**");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**✔️ | سەرکەوتوو بوو : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num)
        return message.channel.send(
          "**❌ | تکایە ژمارەی دوای کۆماندەکە بنووسە .**"
        );
      if (isNaN(num))
        return message.channel.send("**❌ | ژمارەی دوای کۆماندەکە بنووسە.**");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**✔️ | سەرکەوتوو بووanti roleD : ${config[message.guild.id].roleDelLimit}**`
      );
    } ////////////////mrfix
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num)
        return message.channel.send(
          "**❌ | تکایە ژمارەی دوای کۆماندەکە بنووسە .**"
        ); ////////////////mrfix
      if (isNaN(num))
        return message.channel.send("**❌ | ژمارەی دوای کۆماندەکە بنووسە.**");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**✔️ | سەرکەوتوو بووanti roleC : ${config[message.guild.id].roleCrLimits}**`
      );
    } ////////////////mrfix
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num)
        return message.channel.send(
          "**❌ | تکایە ژمارەی دوای کۆماندەکە بنووسە .**"
        ); ////////////////mrfix
      if (isNaN(num))
        return message.channel.send("**❌ | ژمارەی دوای کۆماندەکە بنووسە.**");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        ////////////////mrfix
        `**✔️ | سەرکەوتوو بووanti channelD : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num)
        return message.channel.send(
          "**❌ | تکایە ژمارەی دوای کۆماندەکە بنووسە .**"
        ); ////////////////mrfix
      if (isNaN(num))
        return message.channel.send("**❌ | ژمارەی دوای کۆماندەکە بنووسە.**");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**✔️ | سەرکەوتوو بووanti channelC : ${config[message.guild.id].chaCrLimit}**`
      );
    } ////////////////mrfix
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num)
        return message.channel.send(
          "**❌ | تکایە ژمارەی دوای کۆماندەکە بنووسە .**"
        );
      if (isNaN(num))
        return message.channel.send("**❌ | ژمارەی دوای کۆماندەکە بنووسە.**");
      config[message.guild.id].time = num;
      message.channel.send(
        `**✔️ | سەرکەوتوو بوو : ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    }) ////////////////mrfix
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    }; ////////////////mrfix
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**❗️ | ${entry.username} Has \`Delete\` Many Channels .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**❗️ | ${entry.username} Has \`Create\` Many Channels .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
    ////////////////mrfix
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
}); ////////////////mrfix
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**❗️ | ${entry.username} Has \`Delete\` Many Roles .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**❗️ | ${entry.username} Has \`Create\` Many Roles .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**❗️ | ${entry.username} Has \`Ban\` Many Members .**`
          )
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**❗️ | ${entry.username} Has \`Kick\` Many Members .**`
          )
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
}); ////////////////mrfix

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 0.1
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      }; ////////////////mrfix
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        ////////////////mrfix
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**❗️ | ${entry.username} Has \`Kick\` Many Members .**`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          ////////////////mrfix
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    } ////////////////mrfix

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

// ======== { • settings • }======== //

client.on("message", message => {
  if (message.content === prefix + "settings") {
    if (!message.member.hasPermission("Ownership"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const mrfix = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL).setDescription(`AntiBan
Enabled:🟢 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled:🟢 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled:🟢 
Maximum Time : ${config[message.guild.id].time}
`);

    message.channel.sendEmbed(mrfix);
  }
});
// ======== { • anti spam • }======== //

const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
  warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
  kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
  warnMessage: "{@user}, تکایە بۆستە لە چات کردن .", // Message that will be sent in chat upon warning a user.
  kickMessage: "**{user_tag}**, لەگەڵ تۆمە کیک دەکرێی .", // Message that will be sent in chat upon kicking a user.
  banMessage: "**{user_tag}**, برۆ باند کرای خێری لێ ببینی .", // Message that will be sent in chat upon banning a user.
  maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
  exemptPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions.
  ignoreBots: true, // Ignore bot messages.
  verbose: true, // Extended Logs from module.
  ignoredUsers: [] // Array of User IDs that get ignored.
  // And many more options... See the documentation.
});
// ======== { • anti reklam • }======== //
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("http")) {
    if (msg.member.hasPermission("MANAGE_EMOJIS")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```ریکلام مەکە خۆم تورەم .```");
  }
});
// ======== { • anti everyone • }======== //
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```کێ بوو ئێڤریوەنی لێدا .```");
  }
});
// ======== { • anti here • }======== //
client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```تۆ ناتوانی هێرر لێبدەی .```");
  }
});
// ======== [  codi offline ] ======  //
client.on("typingStart", (ch, user) => {
  if (user.presence.status === "offline") {
    ch.send(
      `${user}(:😠:   دەستەکەو کەشف بوو ئەوە خۆت ئۆفلاین ئەکەی خێرا خۆت ئۆنلاین کە`
    ).then(msg => {
      msg.delete(10000);
    });
  }
});
//  =========  [ nama ]   ========  //
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith("2!bc")) {
    if (!message.channel.guild)
      return message.channel
        .send("**ئەم فەرمانە بەس بۆ سێرڤەرە**")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("ببورە تۆ ڕۆڵی بەرزت نیە");
    let args = message.content
      .split(" ")
      .join(" ")
      .slice("2 + prifix.length");
    let copy = "Home For Developers";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply("**✅**");
    message.channel
      .send(`**__تۆ دڵنیای دەتەوێ نامەکە بنێری؟__** \` ${args}\``)
      .then(msg => {
        msg
          .react("✅")
          .then(() => msg.react("❌"))
          .then(() => msg.react("✅"));

        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;
        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.channel
            .send(`☑ |   ${message.guild.members.size}  بەسەرکەوتوویی نێردرا `)
            .then(m => m.delete(5000));
          message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle("WARNING :mega: ")
              .addField(".", args)
              .setImage(
                "https://cdn.discordapp.com/attachments/703243461079597138/708070790079184957/image0.gif"
              )
              .setThumbnail("")
              .setFooter(copy, client.user.avatarURL);
            m.send({ embed: bc });
            msg.delete();
          });
        });

        reaction2.on("collect", r => {
          message.channel
            .send(`**Broadcast Canceled.**`)
            .then(m => m.delete(5000));
          msg.delete();
        });
      });
  }
});

///   ===== ( replay )  ======   ///

client.on("ready", () => {
  console.log(`Logged in as ${client.user}!`);
});

client.on("message", msg => {
  if (msg.content === "سڵاو") {
    msg.reply("**ســڵاو لــە تــــۆش ♥**");
  }
});

// ========  ( replay )  ======== //

client.on("ready", () => {
  console.log(`Logged in as ${client.user}!`);
});

client.on("message", msg => {
  if (msg.content === "Slaw") {
    msg.reply("**ســڵاو لــە تــــۆش ♥**");
  }
});

//  ======   [  replay  ]  =========  //

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "slaw") {
    msg.reply("**ســڵاو لــە تــــۆش ♥**");
  }
});

//  ========= (  join be kota  )  ========  //

client.on("ready", () => {
  var join = client.channels.get("755095740526887022");
  if (join) join.join();
});

//  ======= [ bo jaw ] ======== //

client.on("message", async message => {
  if (message.content.startsWith(prefix + "day")) {
    message.channel.send("```کارا کرا```");
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.channel.send("PERMISSION NEEDED");
    if (!message.guild.member(client.user).hasPermissions(["MANAGE_CHANNELS"]))
      return message.channel.send("PERMISSION NEEDED");

    message.guild
      .createChannel(`Day : ${moment().format("dddd")}`, "voice")
      .then(c => {
        console.log(`Day channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(`❄ Day : 「${moment().format("dddd")}」`);
        }, 1000);
      });
  }
});

//   =============================== \\

client.on("message", function(message) {
  if (message.content.startsWith(prefix + "report")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageReason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!messageReason)
      return message.reply("**# دڵنیاببوە لە راستی وشەکەت!**");
    let mUser = message.mentions.users.first();
    if (!mUser) return message.channel.send("تکایە کەسی بەکارهێنەر تاگ بکە.");
    let Rembed = new Discord.RichEmbed()
      .setTitle("`ریپۆرتی نوێ!`")
      .setThumbnail(message.author.avatarURL)
      .addField("**# - ریپۆرت دراوە لە:**", mUser, true)
      .addField("**# - ئایدی کەسی ریپۆرت لێدراو :**", mUser.id, true)
      .addField("**# - بەهۆی:**", messageReason, true)
      .addField("**# - لە چەناڵی:**", message.channel, true)
      .addField("**# - لەکاتی:**", message.createdAt, true)
      .setFooter(
        "If the reporting was a joke, the person reporting would be subject to penalties"
      );
    message.channel.send(Rembed);
    message.channel
      .send("__ئایە تۆ دڵنیای دەتەوێ ریپۆرتەکە بروات بۆ ئۆنەر??__")
      .then(msg => {
        msg.react("✅");
        msg
          .react("❌")
          .then(() => msg.react("❌"))
          .then(() => msg.react("✅"));
        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;

        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.guild.owner.send(Rembed);
          message.reply("**# - سەرکەوتوو بوو! 🎇**");
        });
        reaction2.on("collect", r => {
          message.reply("**# - هەڵوەشایەوە!**");
        });
      });
  }
});

// ================================================ //

client.on("message", message => {
  if (message.content.split(" ")[0].toLowerCase() === "2!clear") {
    const word = message.content;
    const number = word.slice(7, word.length);
    const int = Number(number);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "تۆ ناتوانیت ئەم فرمانە ئەنجەم بدەیت `MANAGE_MESSAGE`چونکە ڕۆڵەکەی تۆ ئەمەی پێ نیە "
      );
    }
    if (int >= 101) {
      return message.channel.send("بۆتەکە توانایی نیەلە 100چات زیاتر بسڕێتەوە");
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("ناتوانى ");
    }
    if (int == "1000") {
      return message.channel.send("تکایە ژمارەکە بنووسە");
    } else if (isNaN(int)) {
      return message.reply("Number");
    }
    message.channel.bulkDelete(int).then(() => {
      return message.channel
        .send(`Cleared ${int} messages.`)
        .then(m => m.delete(5000));
    });
  }
});

//  ===========[  dzha jun  ]=========== //

client.on("message", async message => {
  if (
    message.content.includes(
      "Maza",
      "Qn",
      "Qwn",
      "Qwndar",
      "dakt bgem",
      "xwshkt bgem",
      "nankt",
      "xwshkt",
      "Babt",
      "maza"
    )
  ) {
    if (message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply(" This command only for servers");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(`**  You Have Been Muted ** , **Reason : Insult**`)
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name}`);
    message.channel.send(embed500);
    message.author.send(
      `'🔒تۆ میوت کرای بەھۆی جوێندان...ھەیبە برام رێزی خۆت بگرە خوشکو داکت ھەیە'`
    );
  }
});
client.on("message", async message => {
  if (
    message.content.includes(
      "مەزە",
      "قن",
      "قوز",
      "قندەر",
      "دایک",
      "بیگێم",
      "خوشک",
      "تەنتە",
      "نەنک",
      "باوکت",
      "خوێڕی",
      "کێر"
    )
  ) {
    if (message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(name, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply(" This command only for servers");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
      .addField(`**  ئەمە مویت کرا لەبەر جوێن ** , **Reason : Insult**`)
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name}`);
    message.channel.send(embed500);
    message.author.send(
      `'🔒تۆ میوت کرای بەھۆی جوێندان...عەیبە برام رێزی خۆت بگرە خوشکو داکت ھەیە'`
    );
  }
});

//   ====================    [      ]     ===============    //

