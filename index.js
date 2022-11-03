import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot('5319773717:AAH1DKgjpcS0eZUVKxcm0_jGp2ucijzdj_s', {
    polling:true
})

bot.onText(/\/start/, msg =>{
    bot.sendMessage(msg.chat.id, `Assalomu aleykum ${msg.chat.first_name}, Xush kelibsiz`, {
        reply_markup:{
            keyboard:[
                [
                    "Men haqimda 👱‍♂️", "Mening ishlarim 💻"
                ],
                [
                    "Menga bog'lanish 📞"
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.on("message", msg =>{
    const chatId = msg.chat.id
    if(msg.text=="Men haqimda 👱‍♂️"){
        bot.sendPhoto(chatId, './me.jpg', {
            caption:`
             <i>My fullname is Nizomov Nazarqosim. I am a full-stack developer and financier</i>\n<span class="tg-spoiler">Awesome</span>
            `,
            parse_mode:"HTML"
        })
    }

    if(msg.text=="Mening ishlarim 💻"){
        bot.sendPhoto(chatId, './pf.jfif', {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text:"Weather app",
                            url:'https://quiet-kitsune-db20fa.netlify.app/'
                        },
                        {
                            text:"Amazon market",
                            url:'https://amazon-website-full.netlify.app/'
                        }
                    ]
                ]
            }
        })
    }


    if(msg.text == "Menga bog'lanish 📞"){
        bot.sendMessage(chatId, "Kontaktingizni ulashing", {
            reply_markup:JSON.stringify({
                keyboard:[
                    [{
                        text:"Kontaktingizni ulashing",
                        request_contact:true
                    }],
                    [
                        "Orqaga 🔙"
                    ]
                ],
                resize_keyboard:true
            })
        })
    }
    

    if(msg.text == "Orqaga 🔙"){
        bot.sendMessage(msg.chat.id, `Assalomu aleykum ${msg.chat.first_name}, Xush kelibsiz`, {
        reply_markup:{
            keyboard:[
                [
                    "Men haqimda 👱‍♂️", "Mening ishlarim 💻"
                ],
                [
                    "Menga bog'lanish 📞"
                ]
            ],
            resize_keyboard:true
        }
    })
    }


})