// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')


banChats = true
offline = false
publik = true
targetpc = '6289515233398'
owner = '6289515233398'
fake = 'Saya jlelkk tapi jelekan kamuu'
numbernye = '0'
waktu = '-'
alasan = '-'
//=================================================//
module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'

        //MESS
		mess = {
			wait: '_Please Wait..._',
			success: 'Success',
			wrongFormat: '*❌ Format Salah Silahkan Coba Lagi*',
			error: {
				stick: '*❌ Please Chose Sticker Only*',
				Iv: '*❌ Kesalahaan Coba Lagi*'
			},
			only: {
				group: '*[❗] Fitur Ini Harus Di Grup*',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
  
        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/ppfake.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/ppfake.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Deviraa Cntik`,jpegThumbnail: fs.readFileSync(`./stik/ppfake.jpeg`)}}}
        const finv = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6287895808192-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `Deviraa Cantig`, 'jpegThumbnail': fs.readFileSync(`./stik/ppfake.jpeg`)}}}
        const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `DeviraaNbl`,jpegThumbnail: fs.readFileSync(`DeviraaNbl`)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6287895808192-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `DeviraaHost`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;DeviraaNbl,;;;\nFN:DeviraaNbl,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./stik/ppfake.jpeg`), thumbnail: fs.readFileSync(`./stik/ppfake.jpeg`),sendEphemeral: true}}}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6289515233398@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '62@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!mek.key.fromMe && banChats === true) return
switch (command) {
    case 'listmenu':
var menu = `_Hai Sayonara,${pushname}👋_
*List Menu Bot Hosting Viracanz 🐱*

*1.termintedefault*
*2.addpackage*
*3.listdomain*
*4.domain*
*5.cekdefault*
*6.ceksmtp*
*7.cekserver*
*8.idff*
*9.crateaccount*
`
        	fakestatus(menu)
        	break
    case "muktol":
    return fakestatus('*Error,Mode Private Active!*')
    break
    case "addpackage":
    return fakestatus('*Error,Mode Private Active!*')
    break
    case "termintedefault":
    return fakestatus('*Error,Mode Private Active!*')
    break
    case "cekdefault":
    return fakestatus('*Error,Mode Private Active!*')
    break
    case "cekserver":
    return fakestatus('*Error,Mode Private Active!*')
    break
    case "ceksmtp":
    return fakestatus('*Error,Mode Private Active!*')
    break
    case "crateaccount":
    return fakestatus('*Error,Mode Private Active!*')
    break
    case 'hentai':
    getBuffer(`https://viraadwifdlh.herokuapp.com/api/nsfw/hentai?apikey=apiviradev`).then((gambar) => {
    hexa.sendMessage(from, gambar, image, { quoted: finv})
    }) 
    break
    case 'asupan':
              fakestatus(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=3f56f3c5799ae89c6d0f9c96`)
              buffer = await getBuffer(anu.result)
              hexa.sendMessage(from, buffer, video, { quoted: fdoc })
              break
   case 'ass':
    getBuffer(`https://viraadwifdlh.herokuapp.com/api/nsfw/ass?apikey=apiviradev`).then((gambar) => {
     hexa.sendMessage(from, gambar, image, { quoted: fdoc})
       })
       break
       case 'listdomain':
const listdomainku = 
`*List Domain NusaServerHosting Bot*

*1.ffeventkulgar.com ❌*
*2.chipsjagoid.com ❌*
*3.eventmlid22.com ✅*
*4.hdichipsnew22.xyz ✅*
*5.eventnew88.my.id ❌*
*6.pubgnewevent22.com ✅*
*7.cratenew22.com ❌*
*8.kulgarff.xyz ✅*
*9.gruphotnew1.com ✅*
*10.chathot14.my.id ✅*
*11.pubg22.org ❌*
*12.eventml1.net ✅*
*13.mlbbevents2.org ✅*
*14.grupnews22.net ✅*
*15.terbaru.org ❌*
*16.pubggg.my.id ❌*
*17.chipfree22.org ❌*
`
fakestatus(listdomainku)
break
                    case 'idff':
                    if (args.length == 0) return fakestatus(` Use Example: ${prefix + command} 570098876`)
                    ff_id = args[0]
                    get_result = await fetchJson(`https://delvanesia.xyz/ff/?id=${ff_id}&apikey=NbillaLoli`)
                    get_result = get_result.result
                    ini_txt = `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Status : ${get_result.code}`
                    fakestatus(ini_txt)
                    break         
                case 'public':
          	if (!mek.key.fromMe) return fakestatus('Nabilla Cantig')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`*Sucesss Activate Public*`)
          	break
                    case 'isgd':
                    if (args.length == 0) return fakestatus(` Use Example: ${prefix + command} https://delnichi.xyz`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.dapuhy.xyz/api/others/isgd?url=${ini_url}&apikey=jteYUyARKd`)
                    fakestatus(get_result.result)
                    break
                    case 'domain':
                    if (args.length == 0) return fakestatus(` Use Example: ${prefix + command} eventff`)
                    ini_dom = args[0]
                    get_result = await fetchJson(`https://delvanesia.xyz/domaim/init.php?domain=${ini_dom}`)
                    fakestatus(get_result.result)
                    break
                    case 'ssweb':
					if (args.length < 1) return fakestatus('_Error,Invild Link:(_')
					teks = body.slice(7)
					fakestatus(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					hexa.sendMessage(from, buff, image, {quoted: finv})
					break
                    case 'base64':
                    if (args.length == 0) return fakestatus(` Use Example: ${prefix + command} viracanz`)
                    txt_enc = args[0]
                    get_result = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${txt_enc}&APIKEY=06ce175b1a7d7317`)
                    fakestatus(get_result.result)
                    break
	        case 'ping':
	        case 'status':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Seconds*`
			fakestatus(pingnya)
			})
			break  
			
default:
if (budy.startsWith('x')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[LOLI]', 'yellow'), 'Loli', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'white'))
        }
	// console.log(e)
	}
}


	
    
