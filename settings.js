const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { en, es, ar, id, pt, rs } = require('./libs/idiomas/total-idiomas.js')
const axios = require('axios')

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["50231458537", "𝑩𝑹𝑨𝒀𝑨𝑵-𝑮𝑻᳇", true], ["50582340051"], ["51918534156"], ["123456789"]]
global.mods = []
global.premium = []
global.blockList = []

//---------[ NOMBRE/INFO ]---------
global.pagina = "atom.bio/brolybot-md/"
global.botname = "𝑩𝒓𝒐𝒍𝒚𝑩𝒐𝒕-𝑴𝑫"
global.wm = '𝐁𝐫𝐨𝐥𝐲𝐁𝐨𝐭-𝐌𝐃 🐉'
global.vs = '1.2'
global.creador = '𝑩𝑹𝑨𝒀𝑨𝑵-𝑮𝑻᳇'
global.creador2 = '𝑩𝑹𝑨𝒀𝑨𝑵-𝑮𝑻᳇'
global.name = '𝑪𝑹𝑬𝑨𝑫𝑶𝑹'
global.nunber = Math.floor(Math.random() * (27 - 18 + 1)) + 18;




//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +50231458537
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Managua' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = ""
global.author = `{
 "bot": "𝐁𝐫𝐨𝐥𝐲𝐁𝐨𝐭-𝐌𝐃 🐉"
  "autor": "𝑩𝑹𝑨𝒀𝑨𝑵-𝑮𝑻᳇",
  "version": "1.2",
  "creador": "𝑩𝑹𝑨𝒀𝑨𝑵-𝑮𝑻᳇"
}
`
 
//-----------------IMAGENES---------
global.vid1 = "https://a.uguu.se/pgQUNPne.mp4"
global.img = "https://i.ibb.co/T4WcsVw/file.jpg";
global.img1 = 'https://i.ibb.co/T4WcsVw/file.jpg';
global.img2 = 'https://i.ibb.co/QrkLbP4/file.jpg';
global.img3 = 'https://i.ibb.co/TbK4bYz/file.jpg';
global.img4 = 'https://i.ibb.co/0JPshvj/file.jpg';
global.img5 = 'https://i.ibb.co/hcS68Xh/file.jpg';
global.img6 = 'https://tinyurl.com/28wlqbyy';
global.img7 = 'https://tinyurl.com/2922qvl9';
global.img8 = 'https://tinyurl.com/2cbdu8ce';
global.img9 = 'https://tinyurl.com/2cogrq3o';


global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.imagen4 = fs.readFileSync('./media/menu4.jpg')
global.imagen5 = fs.readFileSync('./media/menu5.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.verificar = fs.readFileSync('./media/menu2.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com/El-brayan502/BROLYBOT-MD.git'
global.yt = 'https://www.youtube.com/@Naufrapp'
global.tiktok = 'https://www.tiktok.com/@Broly_bot_777?_t=8mjJpoJfOBK&_r=1'
global.fb = 'https://www.facebook.com/profile.php?id=100087710532984&mibextid=kFxxJD'
global.faceb = 'https://www.facebook.com/profile.php?id=100087710532984&mibextid=kFxxJD'
global.paypal = 'https://www.paypal.me/BrolyCins' 

global.host = 'https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV' //Infinity-host
global.nna = 'https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36' //Update 
global.nn = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' //𝐘𝐮𝐆𝐢-𝐁𝐎𝐓
global.nn2 = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' //Loli & Nova
global.nn3 = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' //Grupo de Colaboracion
global.nn4 = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' // Grupo COL 2
global.nn5 = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' //Grupo COL 3
global.nn6 = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' //test
global.nn7 = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' //Grupo ayuda sobre el bot
global.nn8 = 'https://chat.whatsapp.com/CPGKvG1sV3v4wOwF6c1UiD' //enlace YuGi-BOT
global.multi = 'https://chat.whatsapp.com/CBY978TEw5N10tRhQiapZV' //Grupo náufrazapp
global.nna2 = 'JHnIQUdCGBHHsA6naIGjHG'
global.n2 = "https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36"
//---------[ INFO ]--------- 
global.info = { wait: '*_■■□□□40%_*', 
waitt: '*_■■■□□60%_*', 
waittt: '*_■■■■□80%_*', 
waitttt: '*_■■■■□90%_*', 
waittttt: '*_■■■■■100%_*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
premium: `${lenguaje['prem']()}`,                
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '⏳'
global.dmoji = '😅'
global.done = '✔️'
global.error = '⚠️'
global.xmoji = '💥'

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
