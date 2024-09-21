const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
//if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Managua').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

conn.fakeReply(m.chat, `*✨ 𝙀𝙋𝙀𝙍𝘼 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 .*\n\n> No hagas spam de comandos`, '0@s.whatsapp.net', '𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝙈𝙀𝙉𝙐 ⌛')

let submenu = `
╭───────────────
│           🐲 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 🐲
│───────────────
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐍𝐨𝐦𝐛𝐫𝐞: ${pushname} ${user.registered ? '✓' : ''}
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐋í𝐦𝐢𝐭𝐞: ${user.limit}
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐍𝐢𝐯𝐞𝐥: ${user.level}
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐑𝐨𝐥: ${user.role}
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐄𝐱𝐩: ${user.exp}
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐂𝐨𝐢𝐧𝐬: ${user.money}
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐎𝐰𝐧𝐞𝐫: +50231458534
│˙˚·͟͟͟͟͟͞͞͞͞✰ 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐨𝐬 𝐚𝐬𝐢𝐬𝐭𝐞𝐧𝐜𝐢𝐚𝐥𝐞𝐬: ${rtotalreg} / ${totalreg}
╰───────────────
${pickRandom([`\`¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐯𝐞𝐫 𝐥𝐨𝐬 𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫? 𝐔𝐬𝐚 ${prefix}𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬\``, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`🐉 INFÓRMATE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUÍ\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repositorio con una estrellita 🧿\`\n${md}\``])}`;

let descargar = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━✿━━━━✿━━━━━━✿━━•
┊┃ *🚀 𝑚𝑒𝑛𝑢 𝑑𝑒 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑠 🚀*
┊┃━✿━━━━✿━━━━━━✿━━•
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑙𝑎𝑦 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑙𝑎𝑦2 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑙𝑎𝑦.1 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑙𝑎𝑦.2 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑚𝑢𝑠𝑖𝑐𝑎
┊┃ׁ ⿴⃟ٍࣽ❖ ${prefix}𝑣𝑖𝑑𝑒𝑜
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑙𝑎𝑦𝑑𝑜𝑐
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑙𝑎𝑦3 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑢𝑑𝑖𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑙𝑎𝑦4 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑦𝑡𝑠 _(𝐵𝑢𝑠𝑐𝑎𝑑𝑜𝑟 𝑑𝑒 𝑦𝑜𝑢𝑡𝑢𝑏𝑒)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑦𝑡𝑚𝑝3 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑎𝑢𝑑𝑖𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑦𝑡𝑚𝑝4 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑣𝑖𝑑𝑒𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑠𝑝𝑜𝑡𝑖𝑓𝑦
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑚𝑢𝑠𝑖𝑐 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑚𝑢𝑠𝑖𝑐𝑎 𝑑𝑒 𝑆𝑝𝑜𝑡𝑖𝑓𝑦)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑔𝑖𝑡𝑐𝑙𝑜𝑛𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑟𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑟𝑖𝑜 𝑑𝑒 𝐺𝑖𝑡𝐻𝑢𝑏)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑖𝑚𝑔
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑡𝑡𝑖𝑚𝑔 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑖𝑔𝑠𝑡𝑎𝑙𝑘 _(𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑢𝑛 𝑢𝑠𝑒𝑟 𝑑𝑒 𝑖𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑓𝑏 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑖𝑔 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜 𝑑𝑒 𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑠𝑡𝑎𝑙𝑘 _(𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑢𝑠𝑒𝑟 𝑑𝑒 𝑇𝑖𝑘𝑇𝑜𝑘)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑡𝑤𝑖𝑡𝑡𝑒𝑟
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑥 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑤𝑖𝑡𝑒𝑟 (𝑋)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑔𝑑𝑟𝑖𝑣𝑒 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜𝑠 𝑑𝑒 𝑔𝑑𝑟𝑖𝑣𝑒)_
┊┗━✿━━━━✿━━━━━━✿━━•━✿
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let grupos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🔰 ＭＥＮＵ ＰＡＲＡ ⃐ＧＲＵＰＯＳ 🔰*
┊┃━━━━━━━━━━━━━━•
┊┃𝐺𝑒𝑠𝑡𝑖𝑜𝑛𝑎 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜 𝑐𝑜𝑛  𝐁𝐫𝐨𝐥𝐲𝐁𝐨𝐭-𝐌𝐃 🐉
┊┃━━━━━━━━━━━━━━•
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑤𝑒𝑙𝑐𝑜𝑚𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑒𝑛𝑙𝑎𝑐𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑘𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑎𝑟𝑎𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑜𝑥𝑖𝑐 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘2 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑤𝑖𝑡𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑖𝑘𝑇𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑏 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑎𝑐𝑒𝐵𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝑖𝐼𝑔 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑦𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝐴𝑛𝑡𝑖𝑌𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑢𝑡𝑜𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑡𝑖𝑛𝑠𝑓𝑤 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑚𝑜𝑑𝑜𝑐𝑎𝑙𝑖𝑒𝑛𝑡𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑚𝑜𝑑𝑜𝑎𝑑𝑚𝑖𝑛 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑢𝑑𝑖𝑜𝑠 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑐ℎ𝑎𝑡𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑢𝑡𝑜𝑙𝑒𝑣𝑒𝑙𝑢𝑝 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑢𝑡𝑜𝑛𝑖𝑣𝑒𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑑𝑑𝑟𝑢𝑙𝑒𝑠 _(𝑡𝑒𝑥𝑡)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑠𝑒𝑡𝑟𝑢𝑙𝑒𝑠 _(𝑡𝑒𝑥𝑡)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑟𝑢𝑙𝑒𝑠 _(𝑟𝑒𝑔𝑙𝑎𝑠 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑘𝑖𝑐𝑘 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑑𝑑 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑖𝑛𝑣𝑖𝑡𝑎 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑝𝑟𝑜𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑑𝑒𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑖𝑛𝑓𝑜𝑔𝑟𝑢𝑝𝑜
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑔𝑟𝑜𝑢𝑝𝑖𝑛𝑓𝑜
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑑𝑚𝑖𝑛𝑠 _(𝑖𝑛𝑣𝑜𝑐𝑎𝑟 𝑎 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑠)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑔𝑟𝑢𝑝𝑜 _(𝑐𝑙𝑜𝑠𝑒/𝑜𝑝𝑒𝑛)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑢𝑛𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑞𝑢𝑖𝑡𝑎𝑟𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑑𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖𝑜𝑛 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑟𝑜𝑢𝑝 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑎𝑛𝑢𝑙𝑎𝑟𝑙𝑖𝑛𝑘
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑟𝑒𝑠𝑒𝑡𝑙𝑖𝑛𝑘 _(𝑟𝑒𝑠𝑡𝑎𝑏𝑙𝑒𝑐𝑒𝑟 𝑒𝑙 𝑙𝑖𝑛𝑘 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 _(𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑛 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑖𝑛𝑣𝑜𝑐𝑎𝑟 _(𝑖𝑛𝑣𝑜𝑐𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑛 𝑢𝑛𝑎 𝑙𝑖𝑠𝑡𝑎)_
┊┃ ׁ⿴⃟ٍࣽ❖ ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒 _(𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑜𝑛𝑙𝑖𝑛𝑒)_
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`

let buscadores = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🔎 ＭＥＮＵ ＢＵＳＣＡＤＯＲＥＳ 🔎*
┊┃━━━━━━━━━━━━━━•
┊┃ ⋅⊰ꕤ ${prefix}𝑔𝑜𝑜𝑔𝑙𝑒 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
┊┃ ⋅⊰ꕤ ${prefix}𝑐ℎ𝑎𝑡𝑔𝑝𝑡
┊┃ ⋅⊰ꕤ ${prefix}𝑖𝑎 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑙𝑎 𝐼𝐴)_
┊┃ ⋅⊰ꕤ ${prefix}𝑏𝑎𝑟𝑑 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛)_
┊┃ ⋅⊰ꕤ ${prefix}𝑖𝑚𝑎𝑔𝑒𝑛 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑒𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 _(𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 𝑎𝑙𝑔𝑢𝑛 𝑡𝑒𝑥𝑡𝑜)_
┊┃ ⋅⊰ꕤ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟)_
┊┃ ⋅⊰ꕤ ${prefix}𝑠𝑠 _(𝑙𝑖𝑛𝑘)_
┊┃ ⋅⊰ꕤ ${prefix}𝑑𝑎𝑙𝑙-𝑒
┊┃ ⋅⊰ꕤ ${prefix}𝑝𝑖𝑛𝑡𝑒𝑟𝑒𝑠𝑡
┊┃ ⋅⊰ꕤ ${prefix}𝑤𝑖𝑘𝑖𝑝𝑒𝑑𝑖𝑎
┊┃ ⋅⊰ꕤ ${prefix}𝑤𝑖𝑘𝑖
┊┃ ⋅⊰ꕤ ${prefix}𝑖𝑎2 _(𝑐𝑟𝑒𝑎𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑐𝑜𝑛 𝑙𝑎 (𝐼𝐴)_
┊┃ ⋅⊰ꕤ ${prefix}𝑛𝑝𝑚𝑠𝑒𝑎𝑟𝑐ℎ _(𝐵𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑑𝑒 𝑁𝑃𝑀)_
┊┃ ⋅⊰ꕤ ${prefix}𝑠𝑡𝑦𝑙𝑒𝑡𝑒𝑥𝑡 _(𝐺𝑒𝑛𝑒𝑟𝑎𝑙 𝑑𝑖𝑠𝑒ñ𝑜𝑠 𝑑𝑒 𝑙𝑒𝑡𝑟𝑎𝑠)_
┊┃ ⋅⊰ꕤ ${prefix}ℎ𝑜𝑟𝑎𝑟𝑖𝑜
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let juegos = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *👾 ＭＥＮＵ ＪＵＥＧＯＳ 👾*
┊┃━━━━━━━━━━━━━━•
┊┃ ⋅⊰ꕤ ${prefix}𝑠𝑖𝑚𝑖 _(ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑒𝑙 𝑏𝑜𝑡)_
┊┃ ⋅⊰ꕤ ${prefix}𝑝𝑝𝑡 _(𝑝𝑖𝑒𝑑𝑟𝑎, 𝑝𝑎𝑝𝑒𝑙, 𝑜 𝑡𝑖𝑗𝑒𝑟𝑎)_
┊┃ ⋅⊰ꕤ ${prefix}𝑔𝑎𝑦 @𝑡𝑎𝑔
┊┃ ⋅⊰ꕤ ${prefix}𝑝𝑎𝑟𝑒𝑗𝑎 @𝑡𝑎𝑔
┊┃ ⋅⊰ꕤ ${prefix}𝑙𝑜𝑣𝑒 @𝑡𝑎𝑔
┊┃ ⋅⊰ꕤ ${prefix}𝑓𝑜𝑙𝑙𝑎𝑟 @𝑡𝑎𝑔
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑜𝑝𝑔𝑎𝑦𝑠
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑜𝑝𝑜𝑡𝑎𝑘𝑢𝑠
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑜𝑝
┊┃ ⋅⊰ꕤ ${prefix}𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎
┊┃ ⋅⊰ꕤ ${prefix}𝑣𝑒𝑟𝑑𝑎𝑑
┊┃ ⋅⊰ꕤ ${prefix}𝑟𝑒𝑡𝑜
┊┃ ⋅⊰ꕤ ${prefix}𝑑𝑜𝑥𝑒𝑎𝑟
┊┃ ⋅⊰ꕤ ${prefix}𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑙𝑖𝑑𝑎𝑑
┊┃ ⋅⊰ꕤ ${prefix}𝑟𝑎𝑐𝑖𝑠𝑡𝑎
┊┃ ⋅⊰ꕤ ${prefix}𝑠𝑙𝑜𝑡
┊┃ ⋅⊰ꕤ ${prefix}𝑚𝑎𝑡ℎ
┊┃ ⋅⊰ꕤ ${prefix}𝑚𝑎𝑡𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑠
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑡𝑡
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑖𝑐𝑡𝑎𝑐𝑡𝑜𝑒
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑡𝑐
┊┃ ⋅⊰ꕤ ${prefix}𝑑𝑒𝑙𝑡𝑡𝑡
┊┃ ⋅⊰ꕤ ${prefix}𝑑𝑎𝑑𝑜
┊┃ ⋅⊰ꕤ ${prefix}𝑝𝑖𝑟𝑜𝑝𝑜
┊┃ ⋅⊰ꕤ ${prefix}𝑠ℎ𝑖𝑝
┊┃ ⋅⊰ꕤ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑡𝑟𝑖𝑜
┊┃ ⋅⊰ꕤ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑝𝑎𝑟𝑒𝑗𝑎
┊┃ ⋅⊰ꕤ ${prefix}𝑡𝑥𝑡 _(𝑡𝑒𝑥𝑡𝑜)_
┊┃ ⋅⊰ꕤ ${prefix}𝑓𝑎𝑘𝑒 _(𝑡𝑒𝑥𝑡𝑜 + 𝑡𝑎𝑔)_
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let efecto = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🎤 ＭＥＮＵ ＤＥ ＥＦＥＣＴＯＳ 🎤*
┊┃━━━━━━━━━━━━━━•
┊┃ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝑈𝑁 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑏𝑎𝑠𝑠
┊┃ ❏ ${prefix}𝑏𝑙𝑜𝑤𝑛
┊┃ ❏ ${prefix}𝑑𝑒𝑒𝑝
┊┃ ❏ ${prefix}𝑒𝑎𝑟𝑟𝑎𝑝𝑒
┊┃ ❏ ${prefix}𝑓𝑎𝑠𝑡
┊┃ ❏ ${prefix}𝑓𝑎𝑡
┊┃ ❏ ${prefix}𝑛𝑖𝑔ℎ𝑡𝑐𝑜𝑟𝑒
┊┃ ❏ ${prefix}𝑟𝑒𝑣𝑒𝑟𝑠𝑒
┊┃ ❏ ${prefix}𝑟𝑜𝑏𝑜𝑡
┊┃ ❏ ${prefix}𝑠𝑙𝑜𝑤
┊┃ ❏ ${prefix}𝑠𝑚𝑜𝑜𝑡ℎ
┊┃ ❏ ${prefix}𝑠𝑞𝑢𝑖𝑟𝑟𝑒𝑙
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let convertidores = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🧧ＭＥＮＵ ＣＯＮＶＥＲＴＩＤＯＲＥＳ 🧧*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑡𝑜𝑢𝑟𝑙
┊┃ ❏ ${prefix}𝑡𝑡𝑠
┊┃ ❏ ${prefix}𝑡𝑜𝑚𝑝3
┊┃ ❏ ${prefix}𝑡𝑜𝑖𝑚𝑔
┊┃ ❏ ${prefix}𝑡𝑜𝑎𝑢𝑑𝑖𝑜
┊┃ ❏ ${prefix}𝑡𝑜𝑎𝑛𝑖𝑚𝑒
┊┃ ❏ ${prefix}ℎ𝑑
┊┃ ❏ ${prefix}𝑙𝑜𝑔𝑜𝑠
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menu18 = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🥵 ＭＥＮＵ +18 🥵*
┊┃━━━━━━━━━━━━━━•
┊┃ *𝑁𝑜𝑡𝑎: 𝑢𝑠𝑎𝑟𝑙𝑜 𝑏𝑎𝑗𝑎 𝑡𝑢 𝑟𝑒𝑠𝑝𝑜𝑛𝑠𝑎𝑏𝑖𝑙𝑖𝑑𝑎𝑑*
┊┃ *𝑁𝑜 𝑠𝑒𝑎 𝑝𝑎𝑗𝑒𝑟𝑜*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑝𝑢𝑠𝑠𝑦
┊┃ ❏ ${prefix}𝑛𝑠𝑓𝑤𝑙𝑜𝑙𝑖
┊┃ ❏ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖
┊┃ ❏ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖2
┊┃ ❏ ${prefix}𝑝𝑎𝑐𝑘
┊┃ ❏ ${prefix}𝑝𝑎𝑐𝑘2
┊┃ ❏ ${prefix}𝑝𝑎𝑐𝑘3
┊┃ ❏ ${prefix}𝑐ℎ𝑖𝑛𝑎
┊┃ ❏ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥
┊┃ ❏ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥𝑙𝑒𝑠𝑏𝑖
┊┃ ❏ ${prefix}𝑝𝑜𝑟𝑛𝑜𝑙𝑒𝑠𝑏𝑖𝑎𝑛𝑎𝑣𝑖𝑑
┊┃ ❏ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑙𝑒𝑠𝑏𝑖𝑥𝑥𝑥
┊┃ ❏ ${prefix}𝑝𝑜𝑟𝑛𝑜
┊┃ ❏ ${prefix}𝑙𝑒𝑤𝑑
┊┃ ❏ ${prefix}𝑓𝑒𝑒𝑑
┊┃ ❏ ${prefix}𝑔𝑎𝑠𝑚
┊┃ ❏ ${prefix}𝑎𝑛𝑎𝑙
┊┃ ❏ ${prefix}ℎ𝑜𝑙𝑜
┊┃ ❏ ${prefix}𝑡𝑖𝑡𝑠
┊┃ ❏ ${prefix}𝑘𝑢𝑛𝑖
┊┃ ❏ ${prefix}𝑘𝑖𝑠𝑠
┊┃ ❏ ${prefix}𝑒𝑟𝑜𝑘
┊┃ ❏ ${prefix}𝑠𝑚𝑢𝑔
┊┃ ❏ ${prefix}𝑠𝑜𝑙𝑜𝑔
┊┃ ❏ ${prefix}𝑓𝑒𝑒𝑡𝑔
┊┃ ❏ ${prefix}𝑙𝑒𝑤𝑑𝑘
┊┃ ❏ ${prefix}𝑓𝑒𝑚𝑑𝑜𝑚
┊┃ ❏ ${prefix}𝑐𝑢𝑑𝑑𝑙𝑒
┊┃ ❏ ${prefix}𝑒𝑟𝑜𝑦𝑢𝑟𝑖
┊┃ ❏ ${prefix}𝑐𝑢𝑚
┊┃ ❏ ${prefix}𝑏𝑙𝑜𝑤𝑗𝑜𝑏
┊┃ ❏ ${prefix}ℎ𝑜𝑙𝑜𝑒𝑟𝑜
┊┃ ❏ ${prefix}𝑒𝑟𝑜𝑘𝑒𝑚𝑜
┊┃ ❏ ${prefix}𝑓𝑜𝑥_𝑔𝑖𝑟𝑙
┊┃ ❏ ${prefix}𝑓𝑢𝑡𝑎𝑛𝑎𝑟𝑖
┊┃ ❏ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menurandow = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *⛩️ ＭＥＮＵ ＲＡＮＤＯＭ ⛩️*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑚𝑒𝑚𝑒𝑠
┊┃ ❏ ${prefix}ℎ𝑜𝑟𝑛𝑦
┊┃ ❏ ${prefix}𝑠𝑖𝑚𝑝
┊┃ ❏ ${prefix}𝑙𝑜𝑙𝑖𝑐𝑒
┊┃ ❏ ${prefix}𝑐𝑜𝑚𝑒𝑛𝑡𝑎𝑟
┊┃ ❏ ${prefix}𝑐𝑜𝑚𝑚𝑒𝑛𝑡
┊┃ ❏ ${prefix}𝑙𝑜𝑙𝑖
┊┃ ❏ ${prefix}𝑙𝑜𝑙𝑖𝑣𝑖𝑑
┊┃ ❏ ${prefix}𝑛𝑒𝑘𝑜
┊┃ ❏ ${prefix}𝑤𝑎𝑖𝑓𝑢
┊┃ ❏ ${prefix}𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘
┊┃ ❏ ${prefix}𝑛𝑎𝑣𝑖𝑑𝑎𝑑
┊┃ ❏ ${prefix}𝑎𝑘𝑖𝑟𝑎
┊┃ ❏ ${prefix}𝑎𝑘𝑖𝑦𝑎𝑚𝑎
┊┃ ❏ ${prefix}𝑐ℎ𝑖𝑛𝑎
┊┃ ❏ ${prefix}𝑎𝑛𝑛𝑎
┊┃ ❏ ${prefix}𝑎𝑠𝑢𝑛𝑎
┊┃ ❏ ${prefix}𝑎𝑦𝑢𝑧𝑎𝑤𝑎
┊┃ ❏ ${prefix}𝑏𝑜𝑟𝑢𝑡𝑜
┊┃ ❏ ${prefix}𝑐ℎ𝑖ℎ𝑜
┊┃ ❏ ${prefix}𝑐ℎ𝑖𝑡𝑜𝑔𝑒
┊┃ ❏ ${prefix}𝑑𝑒𝑖𝑑𝑎𝑟𝑎
┊┃ ❏ ${prefix}𝑒𝑟𝑧𝑎
┊┃ ❏ ${prefix}𝑒𝑙𝑎𝑖𝑛𝑎
┊┃ ❏ ${prefix}𝑒𝑏𝑎
┊┃ ❏ ${prefix}𝑒𝑚𝑖𝑙𝑖𝑎
┊┃ ❏ ${prefix}ℎ𝑒𝑠𝑡𝑖𝑎
┊┃ ❏ ${prefix}ℎ𝑖𝑛𝑎𝑡𝑎
┊┃ ❏ ${prefix}𝑖𝑛𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑖𝑠𝑢𝑧𝑢
┊┃ ❏ ${prefix}𝑖𝑡𝑎𝑐ℎ𝑖
┊┃ ❏ ${prefix}𝑖𝑡𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑘𝑎𝑔𝑎
┊┃ ❏ ${prefix}𝑘𝑎𝑔𝑢𝑟𝑎
┊┃ ❏ ${prefix}𝑘𝑎𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑘𝑒𝑛𝑒𝑘𝑖
┊┃ ❏ ${prefix}𝑘𝑜𝑡𝑜𝑟𝑖
┊┃ ❏ ${prefix}𝑘𝑢𝑟𝑢𝑚𝑖
┊┃ ❏ ${prefix}𝑚𝑎𝑑𝑎𝑟𝑎
┊┃ ❏ ${prefix}𝑚𝑖𝑘𝑎𝑠𝑎
┊┃ ❏ ${prefix}𝑚𝑖𝑘𝑢
┊┃ ❏ ${prefix}𝑚𝑖𝑛𝑎𝑡𝑜
┊┃ ❏ ${prefix}𝑛𝑎𝑟𝑢𝑡𝑜
┊┃ ❏ ${prefix}𝑛𝑒𝑧𝑢𝑘𝑜
┊┃ ❏ ${prefix}𝑠𝑎𝑔𝑖𝑟𝑖
┊┃ ❏ ${prefix}𝑠𝑎𝑠𝑢𝑘𝑒
┊┃ ❏ ${prefix}𝑠𝑎𝑘𝑢𝑟𝑎
┊┃ ❏ ${prefix}𝑐𝑜𝑠𝑝𝑙𝑎𝑦
┊┃ ❏ ⊱⋅ ──────────── ⋅⊰
┊┃ ❏  𝑀𝐴𝑆 𝑅𝐴𝑁𝐷𝑂𝑀 𝐴Ñ𝐴𝐷𝐼𝐷𝑂𝑆 𝑃𝑂𝑅 𝐸𝐿𝐼𝐴𝑆𝐴𝑅 𝑌𝑇  
┊┃ ❏ ${prefix}𝑎𝑙𝑔𝑢𝑖𝑒𝑛
┊┃ ❏ ${prefix}𝑛𝑎𝑡𝑢𝑟𝑎𝑙𝑒𝑧𝑎
┊┃ ❏ ${prefix}𝑐𝑜𝑐𝑜
┊┃ ❏ ${prefix}𝑤𝑒𝑏𝑎𝑑𝑎𝑠
┊┃ ❏ ${prefix}𝑟𝑖𝑒
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`

let menu0 = `𝐇𝐨𝐥𝐚 ${pushname}
𝐛𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨/𝐚 𝐚 𝐁𝐫𝐨𝐥𝐲𝐁𝐨𝐭-𝐌𝐃
> 𝐬𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 𝐮𝐧 𝐛𝐨𝐭𝐨𝐧\n> el botón\n𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 ✅ te registra con tu nombre de WhatsApp ejemplo\n${pushname}.${nunber}`;


let menuRPG = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🪙 ＭＥＮＵ ＲＰＧ / ＥＣＯＮＯＭＩＡ*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑚𝑖𝑛𝑎𝑟 _(𝑝𝑎𝑟𝑎 𝑚𝑖𝑛𝑎𝑟 𝑒𝑥𝑝)_
┊┃ ❏ ${prefix}𝑟𝑜𝑏𝑎𝑟
┊┃ ❏ ${prefix}𝑟𝑜𝑏 _(𝑟𝑜𝑏𝑎 𝑒𝑥𝑝 𝑎𝑙𝑔𝑢𝑛 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠)_
┊┃ ❏ ${prefix}𝑐𝑟𝑖𝑚𝑒
┊┃ ❏ ${prefix}𝑡𝑟𝑎𝑏𝑎𝑗𝑎𝑟
┊┃ ❏ ${prefix}𝑤𝑜𝑟𝑘 _(𝑐𝑟𝑎𝑏𝑎𝑗𝑎 𝑦 𝑔𝑎𝑛𝑎𝑠 𝑒𝑥𝑝)_
┊┃ ❏ ${prefix}𝑏𝑢𝑦 _(𝑐𝑜𝑚𝑝𝑟𝑎𝑟 𝑚𝑎𝑠 𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 (𝑙𝑖𝑚𝑖𝑡)_
┊┃ ❏ ${prefix}𝑏𝑎𝑙
┊┃ ❏ ${prefix}𝑏𝑎𝑙𝑎𝑐𝑒 _(𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒/𝑒𝑥𝑝 𝑡𝑒𝑛𝑒𝑠)_
┊┃ ❏ ${prefix}𝑐𝑙𝑎𝑖𝑚 _(𝑟𝑒𝑐𝑜𝑔𝑒𝑟 𝑡𝑢 𝑟𝑒𝑐𝑜𝑚𝑝𝑒𝑛𝑠𝑎)_
┊┃ ❏ ${prefix}𝑙𝑏
┊┃ ❏ ${prefix}𝑙𝑒𝑎𝑑𝑒𝑟𝑏𝑜𝑎𝑟𝑑
┊┃ ❏ ${prefix}𝑐𝑜𝑓𝑟𝑒
┊┃ ❏ ${prefix}𝑝𝑒𝑟𝑓𝑖𝑙
┊┃ ❏ ${prefix}𝑛𝑖𝑣𝑒𝑙
┊┃ ❏ ${prefix}𝑑𝑒𝑝
┊┃ ❏ ${prefix}𝑑𝑒𝑝𝑜𝑠𝑖𝑡𝑎𝑟
┊┃ ❏ ${prefix}𝑟𝑒𝑡𝑖𝑟𝑎𝑟
┊┃ ❏ ${prefix}𝑡𝑜𝑟𝑒𝑚𝑜𝑣𝑒
┊┃ ❏ ${prefix}𝑙𝑒𝑣𝑒𝑙𝑢𝑝
┊┃ ❏ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑖𝑟
┊┃ ❏ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟
┊┃ ❏ ${prefix}𝑎𝑓𝑘 
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuSticker= `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *👽 ＭＥＮＵ ＳＴＩＣＫＥＲ 👽*
┊┃━━━━━━━━━━━━━━•
┊┃ *(𝐶𝑟𝑒𝑎𝑟 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑑𝑒𝑠𝑑𝑒 𝑤ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝑐𝑜𝑛 𝑁𝑜𝑣𝑎𝐵𝑜𝑡)*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑠
┊┃ ❏ ${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟 
┊┃ ❏ ${prefix}𝑤𝑚
┊┃ ❏ ${prefix}𝑎𝑡𝑡𝑝
┊┃ ❏ ${prefix}𝑞𝑐
┊┃ ❏ ${prefix}𝑒𝑚𝑜𝑗𝑖𝑚𝑖𝑥
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuOwner = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *👑 ＭＥＮＵ ＯＷＮＥＲ 👑*
┊┃━━━━━━━━━━━━━━•
┊┃ _(𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝑒𝑥𝑐𝑙𝑢𝑠𝑖𝑣𝑜 𝑝𝑎𝑟𝑎 𝑝𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜/𝑜𝑤𝑛𝑒𝑟 𝑑𝑒𝑙 𝑏𝑜𝑡)_
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑐𝑎𝑙𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑙𝑎𝑚𝑎𝑑𝑎 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑣 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑟𝑖𝑣𝑎𝑑𝑜 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎𝑢𝑡𝑜𝑟𝑒𝑎𝑑 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑚𝑜𝑑𝑜𝑗𝑎𝑑𝑖𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┃ ❏ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑎𝑑𝑑𝑙𝑖𝑚𝑖𝑡 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑑𝑎𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑥𝑝 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑎𝑑𝑑𝑥𝑝 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑢𝑛𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
┊┃ ❏ ${prefix}𝑎𝑢𝑡𝑜𝑎𝑑𝑚𝑖𝑛 
┊┃ ❏ ${prefix}𝑛𝑢𝑒𝑣𝑜𝑛𝑜𝑚𝑏𝑟𝑒
┊┃ ❏ ${prefix}𝑏𝑜𝑡𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑒𝑙 𝑛𝑎𝑚𝑒 𝑑𝑒𝑙 𝑏𝑜𝑡)_
┊┃ ❏ ${prefix}𝑛𝑢𝑒𝑣𝑎𝑓𝑜𝑡𝑜
┊┃ ❏ ${prefix}𝑠𝑒𝑝𝑝𝑏𝑜𝑡
┊┃ ❏ ${prefix}𝑓𝑜𝑡𝑜𝑏𝑜𝑡 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡)_
┊┃ ❏ ${prefix}𝑏𝑐 (𝑑𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑐ℎ𝑎𝑡)
┊┃ ❏ ${prefix}𝑏𝑐𝑔𝑐 (𝑑𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑠𝑜𝑙𝑜 𝑎 𝑔𝑟𝑢𝑝𝑜𝑠)
┊┃ ❏ ${prefix}𝑝𝑢𝑏𝑙𝑖𝑐 (𝑚𝑜𝑑𝑜 𝑝𝑢𝑏𝑙𝑖𝑐𝑜) 
┊┃ ❏ ${prefix}𝑝𝑟𝑖𝑣𝑎𝑑𝑜 (𝑚𝑜𝑑𝑜 𝑝𝑟𝑖𝑣𝑎𝑑𝑜) 
┊┃ ❏ ${prefix}𝑔𝑒𝑡𝑐𝑎𝑠𝑒
┊┃ ❏ ${prefix}𝑓𝑒𝑡𝑐ℎ
┊┃ ❏ ${prefix}𝑢𝑝𝑑𝑎𝑡𝑒
┊┃ ❏ ${prefix}𝑟𝑒𝑠𝑡𝑎𝑟𝑡 
┊┃ ❏ ${prefix}𝑟𝑒𝑖𝑛𝑖𝑐𝑖𝑎𝑟
┊┃ ❏ $ 
┊┃ ❏ >
┊┃ ❏ => 
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let me = 'https://telegra.ph/file/7b33e9c2323940186fc60.mp4'

if (command == 'help') {
m.react('🗒️') 
let saludos = `~ Hola ${pushname} ${user.registered === true ? '✓' : ''}`
let menu = `
╭━━━━━━━✦✗✦━━━━━━━━╮
┃ ${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻┃
╰━━━━━━━✦✗✦━━━━━━━━╯
╭══━━━━✥◈✥━━━━══╮
┃    ℹ️𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ℹ️      ┃
╰══━━━━✥◈✥━━━━══╯
╭━━━━━━━༺༻━━━━━━━╮
┃ ❐ ❐ ${name}  ${creador}
┃ ❐ ${lenguaje.menu.text} [ ${prefix} ]
┃ ❐ ${lenguaje.menu.text2} ${date}
┃ ❐ ${lenguaje.menu.text3} ${time}
┃ ❐ ${lenguaje.menu.text4} ${vs}
┃ ❐ ${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
┃ ❐ ${lenguaje.menu.text6} ${runtime(process.uptime())}
┃ ❐ ${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
┃ ❐ ${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt}` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
╰━━━━━━━༺༻━━━━━━━╯
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
 💻 𝑰𝑵𝑭𝑶 𝑫𝑬𝑳 𝑼𝑺𝑼𝑨𝑹𝑰𝑶  💻
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
╭━━━•━•━━•━━•━━━•━━╮
┃ ❐ ${lenguaje.menu.text8} ${user.limit}
┃ ❐ ${lenguaje.menu.text9} ${user.level}
┃ ❐ ${lenguaje.menu.text10} ${user.role}
┃ ❐ 🌟 𝑒𝑥𝑝 : ${user.exp}
┃ ❐ 💰 𝑐𝑜𝑖𝑛𝑠 : ${user.money}
┃ ❐ ${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
╰━━━•━•━━•━━•━━━•━━╯`
let xd = `${pickRandom([`\`¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐯𝐞𝐫 𝐥𝐨𝐬 𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫? 𝐔𝐬𝐚 ${prefix}𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬\``, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`🐉 INFÓRMATE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUÍ\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repositorio con una estrellita ✳️\`\n${md}\``])}`;
let listSections = []    
listSections.push({
title: '🗒️𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝘽𝙍𝙊𝙇𝙔𝘽𝙊𝙏-𝙈𝘿 🗒️',
rows: [{ header: "𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", title: "", id: `.allmenu`, description: `Muestra el menu completo\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑", title: "", id: `.menu1`, description: `Muestra el menu de descargas\n`},
{ header: "𝐀𝐔𝐃𝐈𝐎𝐒", title: "", id: `.menu2`, description: `Muestra el menu de audios palabra clave para interactuar con el bot\n` },
{ header: "𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎", title: "", id: `.menu3`, description: `Muestra el menu de gestión del Grupo\n` },
{ header: "𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu4`, description: `Muestra el menu para buscar información\n` },
{ header: "𝐉𝐔𝐄𝐆𝐎𝐒", title: "", id: `.menu5`, description: `Muestra el menu de juegos para divertir tu grupo con multi juegos\n` }, 
{ header: "𝐄𝐅𝐄𝐂𝐓𝐎", title: "", id: `.menu6`, description: `Muestra el menu de efecto\n` }, 
{ header: "𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu7`, description: `Muestra el menu de convertidores\n` }, 
{ header: "𝐑𝐀𝐍𝐃𝐎𝐖", title: "", id: `.menu8`, description: `Muestra el menu randow\n` }, 
{ header: "𝐑𝐏𝐆", title: "", id: `.menu9`, description: `Muestra el menu RPG\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑", title: "", id: `.menu10`, description: `Muestra el menu de creación de sticker\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎", title: "", id: `.menu11`, description: `Muestra el menu solo para propietario del bot\n` },
{ header: "𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎𝐍𝐄𝐒", title: "", id: `.enable`, description: `configuraciones para mi grupo\n` },
{ header: "𝐌𝐄𝐍𝐔 +𝟏𝟖", title: "", id: `.menu18`, description: `Muestra el menu +18 (usarlo bajo tu responsabilidad)\n` }, 
{ header: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒", title: "", id: `.logos`, description: `Muestra la lista para crear logos\n` }
]})

conn.sendList(m.chat, menu, botname, `𝑇𝑂𝐶𝐴 𝐴𝑄𝑈𝐼 ✨`, listSections, {quoted: fkontak})
}

if (command === 'menu' || command === 'Menu') {
    m.react('✨');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menu0, randomImage, 
        [['𝙈𝙀𝙉𝙐 𝙇𝙄𝙎𝙏𝘼 🐉', `#help`], 
         ['𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 📜', `#allmenu`], 
         ['𝙋𝙍𝙐𝙀𝘽𝘼 𝘿𝙀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿✳️', `#ping`],
         ['𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 ✅', `#reg ${pushname}.${nunber}`]], 
        null, null, m);
}


if (command === 'menu1' || command === 'descarga') {
    m.react('🚀');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, descargar, randomImage, 
        [['𝗠𝗘𝗡𝗨𝟮 💽', `.menu2`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command == 'menu2' || command == 'audio') {

let menu2 = `${lenguaje.menu.text13}\n\na\nfeliz navidad\nMerry Christmas\nFeliz cumpleaños\nPasa pack\nUwu\nSiuuu\nhola\nhello\nVete a la verga\nPasen porno\nHora del sexito\nPongan cuties\nFiesta del admin\nAdmin party\nViernes\nGOOOOD\nAlto temazo\nTodo bien\nBuenos dias\nBot gay\nGracias\nFua\nFino señores\n🧐🍷\nCorte\nGaspi buenos dias\nGaspi me saludas\nGaspi y las minitas\nGaspi todo bien\nGaspi ya no aguanto\nContate algo bot\nSexo\nMomento epico\nEl bot del orto no funciona\nEpicardo\nInsta de la minita\nUna mierda de bot\nUltimo momento\nNefasto\nParaguayo\nBot de mierda\nVenezolano\na nadie le importa\nGaspi corte\nYa me voy a dormir\nCalefon\nApurate bot\nUn chino\nNo funciona\nBoliviano\nEnano\nQuien es tu sempai botsito\nMe gimes 7u7\nTe amo botsito uwu\nOnichan\nLa toca 7w7\nautodestruction\n\n${lenguaje.menu.text14}`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command === 'menu3' || command === 'menugrupos') {
    m.react('🔰');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, grupos, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu4' || command === 'menubuscadores') {
    m.react('🪄');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, buscadores, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu5' || command === 'menujuegos') {
    m.react('👾');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, juegos, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu6' || command === 'menuefecto') {
    m.react('🎤');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, efecto, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu7' || command === 'menuconvertidores') {
    m.react('🧧');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, convertidores, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menu18' || command === 'Menuhony') {
    m.react('🥵');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menu18, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menurandow' || command === 'menu8') {
    m.react('⛩️');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menurandow, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}


if (command === 'menuRPG' || command === 'menu9') {
    m.react('⚒️');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menuRPG, randomImage, 
        [
            ['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
            ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
            ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]
        ], 
        null, null, m
    );
}


if (command === 'menuSticker' || command === 'menu10') {
    m.react('🎈');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menuSticker, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}

if (command === 'menuOwner' || command === 'menu11') {
    m.react('👑');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menuOwner, randomImage, 
        [['𝗜𝗥 𝗔𝗟 𝗠𝗘𝗡𝗨 📜', `.menu`], 
         ['𝗘𝗦𝗧𝗔𝗗𝗢 📊', `.status`], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', `.ping`]],
        null, null, m);
}



if (command == 'allmenu' || command == 'menucompleto') {
m.react('⏱️') 
let menu = `╔━━━▣━━◤ 𝘽𝙍𝙊𝙇𝙔 ◢━━▣━━━╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
║࿇ ══━━━━✥◈✥━━━━══ ࿇
║${lenguaje.menu.text} [ ${prefix} ]
║${lenguaje.menu.text2} ${date}
║${lenguaje.menu.text3} ${time}
║${lenguaje.menu.text4} ${vs}
║${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
║${lenguaje.menu.text6} ${runtime(process.uptime())}
║${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
║${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt} ` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
║ 
║${lenguaje.menu.text8} ${user.limit}
║${lenguaje.menu.text9} ${user.level}
║${lenguaje.menu.text10} ${user.role}
║❐ ᴇxᴘ : ${user.exp}
║❐ ᴄᴏɪɴs : ${user.money}
║ 
║${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
║࿇ ══━━━━✥◈✥━━━━══ ࿇
╚══════ ≪ •❈• ≫ ══════╝

==============================
${lenguaje.menu.text12}
==============================

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ＩＮＦＯＢＯＴ*️⃟ᬽ፝֟━*
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑔 _(𝑅𝑒𝑔𝑖𝑠𝑡𝑟𝑎𝑟𝑡𝑒 𝑒𝑛 𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑢𝑛𝑟𝑒𝑔 _(𝑏𝑜𝑟𝑟𝑎𝑟 𝑠𝑢 𝑟𝑒𝑔𝑖𝑠𝑡𝑟𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑦𝑛𝑠 _(𝑛𝑢𝑚𝑒𝑟𝑜 𝑑𝑒 𝑠𝑒𝑟𝑖𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑒𝑠𝑡𝑎𝑑𝑜 _(𝑒𝑠𝑡𝑎𝑑𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑒𝑛𝑢2
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑑𝑖𝑜𝑠 
├༒ᰰຼ ✎ ${prefix}𝑛𝑢𝑒𝑣𝑜 _(𝑛𝑢𝑒𝑣𝑜 𝑐𝑜𝑚𝑎𝑛𝑑𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑔𝑙𝑎𝑠 _(𝑟𝑒𝑔𝑙𝑎𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑖𝑛𝑔
├༒ᰰຼ ✎ ${prefix}𝑣𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑔𝑟𝑢𝑝𝑜𝑠 _(𝑔𝑟𝑢𝑝𝑜𝑠 𝑜𝑓𝑖𝑐𝑖𝑎𝑙𝑒𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑗𝑜𝑖𝑛 _(𝑠𝑜𝑙𝑖𝑐𝑖𝑡𝑎 𝑢𝑛 𝑏𝑜𝑡 𝑝𝑎𝑟𝑎 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑜𝑤𝑛𝑒𝑟
├༒ᰰຼ ✎ ${prefix}𝑐𝑟𝑒𝑎𝑑𝑜𝑟 _(𝑐𝑜𝑛𝑡𝑎𝑐𝑡𝑜𝑠 𝑑𝑒 𝑚𝑖 𝑐𝑟𝑒𝑎𝑑𝑜𝑟)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑠𝑡𝑎𝑙𝑎𝑟𝑏𝑜𝑡 (𝑇𝑢𝑡𝑜𝑟𝑖𝑎𝑙 𝑑𝑒𝑙 𝑖𝑛𝑠𝑡𝑎𝑙𝑎𝑐𝑖𝑜𝑛)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑜𝑙𝑖𝑐𝑖𝑡𝑢𝑑
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑒𝑛𝑡𝑎 
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑒𝑛𝑡𝑎𝑜𝑓𝑖𝑐𝑖𝑎𝑙𝑒𝑠
├༒ᰰຼ ✎ ${prefix}𝑠𝑡𝑎𝑡𝑢𝑠 
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑓𝑜ℎ𝑜𝑠𝑡
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑠𝑡
├༒ᰰຼ ✎ ${prefix}𝑐𝑎𝑓𝑖𝑟𝑒𝑥𝑜𝑠
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑝𝑜𝑟𝑡 _(𝑟𝑒𝑝𝑜𝑟𝑡𝑎 𝑒𝑟𝑟𝑜𝑟𝑒𝑠)_
╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ＪＡＤＩＢＯＴ*️⃟ᬽ፝֟━*
├• *(𝑇𝑖𝑒𝑛𝑒 2 𝑜𝑝𝑐𝑖𝑜𝑛𝑒𝑠 𝑝𝑎𝑟𝑎 ℎ𝑎𝑐𝑒𝑟𝑡𝑒 𝑆𝑢𝑏𝐵𝑜𝑡)*
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *𝐸𝑠𝑐𝑎𝑛𝑒𝑎𝑑𝑜 𝑒𝑙 𝑄𝑅*
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑟𝑏𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑞𝑟
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *𝐶𝑜𝑛 𝑐𝑜𝑑𝑖𝑔𝑜 𝑑𝑒 8 𝑑𝑖𝑔𝑖𝑡𝑜𝑠*
├༒ᰰ ✎ ${prefix}𝑠𝑒𝑟𝑏𝑜𝑡 --𝑐𝑜𝑑𝑒
├༒ᰰຼ ✎ ${prefix}𝑗𝑎𝑑𝑖𝑏𝑜𝑡 --𝑐𝑜𝑑𝑒
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(𝐶𝑜𝑚𝑝𝑟𝑢𝑒𝑏𝑎 𝑠𝑖 ℎ𝑎𝑦 𝑠𝑢𝑏 𝑏𝑜𝑡 𝑐𝑜𝑛𝑒𝑐𝑡𝑎𝑑𝑜)*
├༒ᰰຼ ✎ ${prefix}𝑏𝑜𝑡𝑠 
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝑠𝑜𝑙𝑜 𝑝𝑎𝑟𝑎 𝑙𝑜𝑠 𝑠𝑢𝑏 𝑏𝑜𝑡)*
├༒ᰰຼ ✎ ${prefix}𝑠𝑡𝑜𝑝
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑙𝑗𝑎𝑑𝑖𝑏𝑜𝑡
╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ＤＥＳＣＡＲＧＡ*️⃟ᬽ፝֟━*
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦2 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦.1 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑚𝑢𝑠𝑖𝑐𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦.2 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑢𝑠𝑖𝑐𝑎
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦𝑑𝑜𝑐
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦3 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑢𝑑𝑖𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑙𝑎𝑦4 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜 𝑒𝑛 𝑑𝑜𝑐𝑢𝑚𝑒𝑛𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑦𝑡𝑠 _(𝐵𝑢𝑠𝑐𝑎𝑑𝑜𝑟 𝑑𝑒 𝑦𝑜𝑢𝑡𝑢𝑏𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑦𝑡𝑚𝑝3 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑎𝑢𝑑𝑖𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑦𝑡𝑚𝑝4 _(𝑙𝑖𝑛𝑘 𝑝𝑎𝑟𝑎 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑣𝑖𝑑𝑒𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑝𝑜𝑡𝑖𝑓𝑦
├༒ᰰຼ ✎ ${prefix}𝑚𝑢𝑠𝑖𝑐 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑚𝑢𝑠𝑖𝑐𝑎 𝑑𝑒 𝑆𝑝𝑜𝑡𝑖𝑓𝑦)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑖𝑡𝑐𝑙𝑜𝑛𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑟𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑟𝑖𝑜 𝑑𝑒 𝐺𝑖𝑡𝐻𝑢𝑏)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑖𝑚𝑔
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑖𝑚𝑔 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑡𝑖𝑘𝑡𝑜𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑔𝑠𝑡𝑎𝑙𝑘 _(𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑢𝑛 𝑢𝑠𝑢𝑎𝑟𝑖𝑜 𝑑𝑒 𝑖𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘
├༒ᰰຼ ✎ ${prefix}𝑓𝑏 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚
├༒ᰰຼ ✎ ${prefix}𝑖𝑔 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑣𝑖𝑑𝑒𝑜𝑠 𝑑𝑒 𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒 _(𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜 𝑑𝑒 𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑑𝑟𝑖𝑣𝑒 _(𝐷𝑒𝑠𝑐𝑎𝑟𝑔𝑎 𝑎𝑟𝑐ℎ𝑖𝑣𝑜𝑠 𝑑𝑒 𝑔𝑑𝑟𝑖𝑣𝑒)_
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
├• 𝐺𝑒𝑠𝑡𝑖𝑜𝑛𝑎𝑟 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜 𝑐𝑜𝑛 ✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├༒ᰰຼ ✎ ${prefix}𝑤𝑒𝑙𝑐𝑜𝑚𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑒𝑛𝑙𝑎𝑐𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑘𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑎𝑟𝑎𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑜𝑥𝑖𝑐 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘2 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑤𝑖𝑡𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑖𝑘𝑇𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑏 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑎𝑐𝑒𝐵𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝐼𝑔 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑦𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝐴𝑛𝑡𝑖𝑌𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑛𝑠𝑓𝑤 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑜𝑑𝑜𝑐𝑎𝑙𝑖𝑒𝑛𝑡𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑜𝑑𝑜𝑎𝑑𝑚𝑖𝑛 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑑𝑖𝑜𝑠 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑎𝑡𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑙𝑒𝑣𝑒𝑙𝑢𝑝 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑛𝑖𝑣𝑒𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑘𝑖𝑐𝑘 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑑 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑣𝑖𝑡𝑎 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑟𝑜𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑓𝑜𝑔𝑟𝑢𝑝𝑜
├༒ᰰຼ ✎ ${prefix}𝑔𝑟𝑜𝑢𝑝𝑖𝑛𝑓𝑜
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑚𝑖𝑛𝑠 _(𝑙𝑙𝑎𝑚𝑎 𝑎 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑟𝑢𝑝𝑜 𝑐𝑙𝑜𝑠𝑒/𝑜𝑝𝑒𝑛 
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑢𝑛𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑞𝑢𝑖𝑡𝑎𝑟𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑑𝑒𝑠𝑐 𝑑𝑒𝑙 𝐺𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑟𝑜𝑢𝑝 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝐺𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑢𝑙𝑎𝑟𝑙𝑖𝑛𝑘 
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑠𝑒𝑡𝑙𝑖𝑛𝑘 _(𝑟𝑒𝑠𝑡𝑎𝑏𝑙𝑒𝑐𝑒 𝑒𝑙 𝑙𝑖𝑛𝑘 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
├༒ᰰຼ ✎ ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 _(𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑙 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙 
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑣𝑜𝑐𝑎𝑟 _(𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑙 𝑢𝑛𝑎 𝑙𝑖𝑠𝑡𝑎𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒 _(𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑞𝑢𝑒 𝑒𝑠𝑡𝑎 𝑜𝑛𝑙𝑖𝑛𝑒)_
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
├༒ᰰຼ ✎ ${prefix}𝑔𝑜𝑜𝑔𝑙𝑒 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑎𝑡𝑔𝑝𝑡
├༒ᰰຼ ✎ ${prefix}𝑖𝑎 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑙𝑎 𝐼𝐴)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑟𝑑 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛)_
├༒ᰰຼ ✎ ${prefix}𝑖𝑚𝑎𝑔𝑒𝑛 _(𝐼𝑚𝑎𝑔𝑒𝑛 𝑒𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 _(𝑇𝑟𝑎𝑑𝑢𝑐𝑖𝑟 𝑎𝑙𝑔𝑢𝑛 𝑡𝑒𝑥𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒𝑙 𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟)_
├༒ᰰຼ ✎ ${prefix}𝑠𝑠 _(𝑙𝑖𝑛𝑘)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑎𝑙𝑙-𝑒
├༒ᰰຼ ✎ ${prefix}𝑖𝑎2 _(𝐶𝑟𝑒𝑎𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑐𝑜𝑛 𝑙𝑎 (𝐼𝐴)_
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑟𝑎𝑟𝑖𝑜
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
├༒ᰰຼ ✎ ${prefix}𝑠𝑖𝑚𝑖 _(ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑝𝑝𝑡 _(𝑝𝑖𝑒𝑑𝑟𝑎, 𝑝𝑎𝑝𝑒𝑙, 𝑜 𝑡𝑖𝑗𝑒𝑟𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑔𝑎𝑦 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑟𝑒𝑗𝑎 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑣𝑒 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑙𝑙𝑎𝑟 @𝑡𝑎𝑔
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑝𝑔𝑎𝑦𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑝𝑜𝑡𝑎𝑘𝑢𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑝
├༒ᰰຼ ✎ ${prefix}𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎
├༒ᰰຼ ✎ ${prefix}𝑣𝑒𝑟𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑑𝑜𝑥𝑒𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑚𝑎𝑡ℎ
├༒ᰰຼ ✎ ${prefix}𝑚𝑎𝑡𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑡
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑐𝑡𝑎𝑐𝑡𝑜𝑒
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑐
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑙𝑡𝑡𝑡
├༒ᰰຼ ✎ ${prefix}𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑙𝑖𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑟𝑎𝑐𝑖𝑠𝑡𝑎
├༒ᰰຼ ✎ ${prefix}𝑠𝑙𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑑𝑎𝑑𝑜
├༒ᰰຼ ✎ ${prefix}𝑝𝑖𝑟𝑜𝑝𝑜
├༒ᰰຼ ✎ ${prefix}𝑠ℎ𝑖𝑝
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑡𝑟𝑖𝑜
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑝𝑎𝑟𝑒𝑗𝑎5
┊┃ ✎ ${prefix}𝑡𝑥𝑡 _(𝑡𝑒𝑥𝑡𝑜)_
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑘𝑒 _(𝑡𝑒𝑥𝑡𝑜 + 𝑡𝑎𝑔)_
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🎤 𝐸𝐹𝐸𝐶𝑇𝑂𝑆 𝐷𝐸 𝐴𝑈𝐷𝐼𝑂𝑆*️⃟ᬽ፝֟━*
├༒ᰰຼ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑠𝑠
├༒ᰰຼ ✎ ${prefix}𝑏𝑙𝑜𝑤𝑛
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑒𝑝
├༒ᰰຼ ✎ ${prefix}𝑒𝑎𝑟𝑟𝑎𝑝𝑒
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑠𝑡
├༒ᰰຼ ✎ ${prefix}𝑓𝑎𝑡
├༒ᰰຼ ✎ ${prefix}𝑛𝑖𝑔ℎ𝑡𝑐𝑜𝑟𝑒
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑣𝑒𝑟𝑠𝑒
├༒ᰰຼ ✎ ${prefix}𝑟𝑜𝑏𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑠𝑙𝑜𝑤
├༒ᰰຼ ✎ ${prefix}𝑠𝑚𝑜𝑜𝑡ℎ
├༒ᰰຼ ✎ ${prefix}𝑠𝑞𝑢𝑖𝑟𝑟𝑒𝑙
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🧧𝐶𝑂𝑁𝑉𝐸𝑅𝑇𝐼𝐷𝑂𝑅𝐸𝑆*️⃟ᬽ፝֟━*
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑢𝑟𝑙
├༒ᰰຼ ✎ ${prefix}𝑡𝑡𝑠
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑚𝑝3
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑖𝑚𝑔
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑎𝑢𝑑𝑖𝑜
├༒ᰰຼ ✎ ${prefix}𝑡𝑜𝑎𝑛𝑖𝑚𝑒
├༒ᰰຼ ✎ ${prefix}ℎ𝑑
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵𝐶𝑂𝑀𝐴𝑁𝐷𝑂 +18*️⃟ᬽ፝֟━*
├༒ᰰຼ  *𝐴𝑐𝑡𝑖𝑣𝑎 𝑐𝑜𝑛 (𝑎𝑛𝑡𝑖𝑁𝑠𝑓𝑤 𝑜𝑛)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├༒ᰰຼ ✎ ${prefix}𝑝𝑢𝑠𝑠𝑦
├༒ᰰຼ ✎ ${prefix}𝑛𝑠𝑓𝑤𝑙𝑜𝑙𝑖
├༒ᰰຼ ✎ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖
├༒ᰰຼ ✎ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖2
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑐𝑘
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑐𝑘2
├༒ᰰຼ ✎ ${prefix}𝑝𝑎𝑐𝑘3
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥𝑙𝑒𝑠𝑏𝑖
├༒ᰰຼ ✎ ${prefix}𝑝𝑜𝑟𝑛𝑜𝑙𝑒𝑠𝑏𝑖𝑎𝑛𝑎𝑣𝑖𝑑
├༒ᰰຼ ✎ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑙𝑒𝑠𝑏𝑖𝑥𝑥𝑥
├༒ᰰຼ ✎ ${prefix}𝑝𝑜𝑟𝑛𝑜
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑤𝑑
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑒𝑑
├༒ᰰຼ ✎ ${prefix}𝑔𝑎𝑠𝑚
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑎𝑙	    	
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑙𝑜	    	
├༒ᰰຼ ✎ ${prefix}𝑡𝑖𝑡𝑠	    	
├༒ᰰຼ ✎ ${prefix}𝑘𝑢𝑛𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑖𝑠𝑠
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑜𝑘
├༒ᰰຼ ✎ ${prefix}𝑠𝑚𝑢𝑔
├༒ᰰຼ ✎ ${prefix}𝑠𝑜𝑙𝑜𝑔
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑒𝑡𝑔
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑤𝑑𝑘    
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑚𝑑𝑜𝑚
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑑𝑑𝑙𝑒
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑜𝑦𝑢𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑐𝑢𝑚	    
├༒ᰰຼ ✎ ${prefix}𝑏𝑙𝑜𝑤𝑗𝑜𝑏
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑙𝑜𝑒𝑟𝑜
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑜𝑘𝑒𝑚𝑜
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑥_𝑔𝑖𝑟𝑙
├༒ᰰຼ ✎ ${prefix}𝑓𝑢𝑡𝑎𝑛𝑎𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟	   
├༒ᰰຼ *𝑁𝑜𝑡𝑎: 𝑢𝑠𝑎𝑟𝑙𝑜 𝑏𝑎𝑗𝑎 𝑡𝑢 𝑟𝑒𝑠𝑝𝑜𝑛𝑠𝑎𝑏𝑖𝑙𝑖𝑑𝑎𝑑*
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫* 	
	
╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⛩️ ⃐𝑅𝐴𝑁𝐷𝑂𝑊*️⃟ᬽ፝֟━*
├༒ᰰຼ ✎ ${prefix}𝑚𝑒𝑚𝑒𝑠
├༒ᰰຼ ✎ ${prefix}ℎ𝑜𝑟𝑛𝑦
├༒ᰰຼ ✎ ${prefix}𝑠𝑖𝑚𝑝
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑙𝑖𝑐𝑒
├༒ᰰຼ ✎ ${prefix}𝑐𝑜𝑚𝑒𝑛𝑡𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑐𝑜𝑚𝑚𝑒𝑛𝑡
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑙𝑖
├༒ᰰຼ ✎ ${prefix}𝑙𝑜𝑙𝑖𝑣𝑖𝑑
├༒ᰰຼ ✎ ${prefix}𝑛𝑒𝑘𝑜
├༒ᰰຼ ✎ ${prefix}𝑤𝑎𝑖𝑓𝑢	
├༒ᰰຼ ✎ ${prefix}𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘
├༒ᰰຼ ✎ ${prefix}𝑛𝑎𝑣𝑖𝑑𝑎𝑑
├༒ᰰຼ ✎ ${prefix}𝑎𝑘𝑖𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑘𝑖𝑦𝑎𝑚𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑛𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑠𝑢𝑛𝑎
├༒ᰰຼ ✎ ${prefix}𝑎𝑦𝑢𝑧𝑎𝑤𝑎
├༒ᰰຼ ✎ ${prefix}𝑏𝑜𝑟𝑢𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑖ℎ𝑜
├༒ᰰຼ ✎ ${prefix}𝑐ℎ𝑖𝑡𝑜𝑔𝑒
├༒ᰰຼ ✎ ${prefix}𝑑𝑒𝑖𝑑𝑎𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑟𝑧𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑙𝑎𝑖𝑛𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑏𝑎
├༒ᰰຼ ✎ ${prefix}𝑒𝑚𝑖𝑙𝑖𝑎
├༒ᰰຼ ✎ ${prefix}ℎ𝑒𝑠𝑡𝑖𝑎
├༒ᰰຼ ✎ ${prefix}ℎ𝑖𝑛𝑎𝑡𝑎
├༒ᰰຼ ✎ ${prefix}𝑖𝑛𝑜𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑖𝑠𝑢𝑧𝑢
├༒ᰰຼ ✎ ${prefix}𝑖𝑡𝑎𝑐ℎ𝑖
├༒ᰰຼ ✎ ${prefix}𝑖𝑡𝑜𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑎𝑔𝑎
├༒ᰰຼ ✎ ${prefix}𝑘𝑎𝑔𝑢𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑘𝑎𝑜𝑟𝑖':
├༒ᰰຼ ✎ ${prefix}𝑘𝑒𝑛𝑒𝑘𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑜𝑡𝑜𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑘𝑢𝑟𝑢𝑚𝑖
├༒ᰰຼ ✎ ${prefix}𝑚𝑎𝑑𝑎𝑟𝑎
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑘𝑎𝑠𝑎
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑘𝑢
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑛𝑎𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑛𝑎𝑟𝑢𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑛𝑒𝑧𝑢𝑘𝑜
├༒ᰰຼ ✎ ${prefix}𝑠𝑎𝑔𝑖𝑟𝑖
├༒ᰰຼ ✎ ${prefix}𝑠𝑎𝑠𝑢𝑘𝑒
├༒ᰰຼ ✎ ${prefix}𝑠𝑎𝑘𝑢𝑟𝑎
├༒ᰰຼ ✎ ${prefix}'𝑐𝑜𝑠𝑝𝑙𝑎𝑦
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*
             
*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
├༒ᰰຼ ✎ ${prefix}𝑚𝑖𝑛𝑎𝑟 _(𝑃𝑎𝑟𝑎 𝑚𝑖𝑛𝑎𝑟 𝑒𝑥𝑝)_
├༒ᰰຼ ✎ ${prefix}𝑟𝑜𝑏𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑟𝑜𝑏 _(𝑅𝑜𝑏𝑎 𝑒𝑥𝑝 𝑎𝑙𝑔𝑢𝑛 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑐𝑟𝑖𝑚𝑒
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑏𝑎𝑗𝑎𝑟
├༒ᰰຼ ✎ ${prefix}𝑤𝑜𝑟𝑘 _(𝑇𝑟𝑎𝑏𝑎𝑗𝑎 𝑦 𝑔𝑎𝑛𝑎𝑠 𝑒𝑥𝑝)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑢𝑦 _(𝐶𝑜𝑚𝑝𝑟𝑎𝑟 𝑚𝑎𝑠 𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 (𝑙𝑖𝑚𝑖𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑙
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑙𝑎𝑐𝑒 _(𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒/𝑒𝑥𝑝 𝑡𝑒𝑛𝑒𝑠)_
├༒ᰰຼ ✎ ${prefix}𝑐𝑙𝑎𝑖𝑚
├༒ᰰຼ _(𝑅𝑒𝑐𝑜𝑔𝑒𝑟 𝑡𝑢 𝑟𝑒𝑐𝑜𝑚𝑝𝑒𝑛𝑠𝑎)_
├༒ᰰຼ ✎ ${prefix}𝑙𝑏
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑎𝑑𝑒𝑟𝑏𝑜𝑎𝑟𝑑
├༒ᰰຼ ✎ ${prefix}𝑐𝑜𝑓𝑟𝑒
├༒ᰰຼ ✎ ${prefix}𝑝𝑒𝑟𝑓𝑖𝑙
├༒ᰰຼ ✎ ${prefix}𝑛𝑖𝑣𝑒𝑙
├༒ᰰຼ ✎ ${prefix}𝑙𝑒𝑣𝑒𝑙𝑢𝑝
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑖𝑟
├༒ᰰຼ ✎ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟
├༒ᰰຼ ✎ ${prefix}𝑎𝑓𝑘 
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├༒ *(𝐶𝑟𝑒𝑎𝑟 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑑𝑒𝑠𝑑𝑒 𝑤ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝑐𝑜𝑛 𝑌𝑢𝐺𝑖-𝐵𝑂𝑇)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├༒ᰰຼ ✎ ${prefix}𝑠
├༒ᰰຼ ✎ ${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟 
├༒ᰰຼ ✎ ${prefix}𝑤𝑚
├༒ᰰຼ ✎ ${prefix}𝑎𝑡𝑡𝑝
├༒ᰰຼ ✎ ${prefix}𝑞𝑐
├༒ᰰຼ ✎ ${prefix}𝑒𝑚𝑜𝑗𝑖𝑚𝑖𝑥
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├༒ _(𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝑒𝑥𝑐𝑙𝑢𝑠𝑖𝑣𝑜 𝑝𝑎𝑟𝑎 𝑝𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜/𝑜𝑤𝑛𝑒𝑟 𝑑𝑒 𝑌𝑢𝐺𝑖-𝐵𝑂𝑇 𝑐𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑠𝑜𝑙𝑜 𝑝𝑎𝑟𝑎 𝑒𝑙𝑖𝑎𝑠𝑎𝑟 𝑦𝑡)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑐𝑎𝑙𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑙𝑎𝑚𝑎𝑑𝑎 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑣 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑟𝑖𝑣𝑎𝑑𝑜 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑟𝑒𝑎𝑑 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑚𝑜𝑑𝑜𝑗𝑎𝑑𝑖𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
├༒ᰰຼ ✎ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑑𝑙𝑖𝑚𝑖𝑡 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑑𝑎𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑥𝑝 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑑𝑑𝑥𝑝 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑢𝑛𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
├༒ᰰຼ ✎ ${prefix}𝑎𝑢𝑡𝑜𝑎𝑑𝑚𝑖𝑛 
├༒ᰰຼ ✎ ${prefix}𝑛𝑢𝑒𝑣𝑜𝑛𝑜𝑚𝑏𝑟𝑒
├༒ᰰຼ ✎ ${prefix}𝑏𝑜𝑡𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑒𝑙 𝑛𝑎𝑚𝑒 𝑑𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑛𝑢𝑒𝑣𝑎𝑓𝑜𝑡𝑜
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑝𝑝𝑏𝑜𝑡
├༒ᰰຼ ✎ ${prefix}𝑓𝑜𝑡𝑜𝑏𝑜𝑡 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡)_
├༒ᰰຼ ✎ ${prefix}𝑏𝑐 (𝐷𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑐ℎ𝑎𝑡)
├༒ᰰຼ ✎ ${prefix}𝑏𝑐𝑔𝑐 (𝐷𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑠𝑜𝑙𝑜 𝑎 𝑔𝑟𝑢𝑝𝑜𝑠)
├༒ᰰຼ ✎ ${prefix}𝑠𝑒𝑡𝑝𝑝 (𝐶𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡) 
├༒ᰰຼ ✎ ${prefix}𝑝𝑢𝑏𝑙𝑖𝑐 (𝑀𝑜𝑑𝑜 𝑝𝑢𝑏𝑙𝑖𝑐𝑜) 
├༒ᰰຼ ✎ ${prefix}𝑝𝑟𝑖𝑣𝑎𝑑𝑜 (𝑀𝑜𝑑𝑜 𝑝𝑟𝑖𝑣𝑎𝑑𝑜) 
├༒ᰰຼ ✎ ${prefix}𝑔𝑒𝑡𝑐𝑎𝑠𝑒
├༒ᰰຼ ✎ ${prefix}𝑓𝑒𝑡𝑐ℎ
├༒ᰰຼ ✎ ${prefix}𝑢𝑝𝑑𝑎𝑡𝑒
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑠𝑡𝑎𝑟𝑡 
├༒ᰰຼ ✎ ${prefix}𝑟𝑒𝑖𝑛𝑖𝑐𝑖𝑎𝑟
├༒ᰰຼ ✎ $ 
├༒ᰰຼ ✎ >
├༒ᰰຼ ✎ => 
*╰♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥࣭࣭࣭۫┄̸࣭۫♡ﾟ･｡｡･ﾟ♡ﾟ･｡♥｡･ﾟ♥̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`
conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363312092804854@newsletter', 
serverMessageId: '', 
newsletterName: '𝐁𝐫𝐨𝐥𝐲𝐁𝐨𝐭-𝐌𝐃 🐉' },
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
}

if (command == 'nuevo' || command == 'extreno') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text15(vs), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363312092804854@newsletter', serverMessageId: '', newsletterName: '𝐁𝐫𝐨𝐥𝐲𝐁𝐨𝐭-𝐌𝐃 🐉' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'reglas') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text16, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363312092804854@newsletter', serverMessageId: '', newsletterName: '𝐁𝐫𝐨𝐥𝐲𝐁𝐨𝐭-𝐌𝐃 🐉' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
