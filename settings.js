const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'Your Key', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6434935849:AAHxvwWhM8cL4tRzawFBwOnjI54NtYdnjPo" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "🤖JengkolOnline🤖" //your bot name
global.OWNER_NAME = "Jengkol_Online" //your name
global.OWNER_NUMBER = "6282372139631" //your telegram number
global.OWNER = ["https://t.me/zeeoneofc", "https://t.me/Jengkol_Online"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
