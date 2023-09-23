require("./module")

global.owner = "62857176719501"
global.namabot = "XinzuuBotzzWar"
global.namaCreator = "ঔৣ⃕᭝XinzuDvlpr᭄`"
global.autoJoin = false
global.antilink = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = "Halo dek sv Xena Store Ya!!"
global.tekspushkonv2 = "Halo dek sv Xena Store Ya!!"
global.packname = "ঔৣ⃕᭝XinzuuWarBot᭄"
global.author = "Sticker By Xinzu"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})