const { Telegraf } = require('telegraf')

const BOT_TOKEN = "6340564485:AAHyrTxHQW0gAnUIWalBwrygLmyjJKx0ow0"
const bot = new Telegraf(BOT_TOKEN)
const web_line = "https://master.d2szxkrbcex1dr.amplifyapp.com/"
bot.start((ctx) =>
    ctx.reply('Welcome to my bot',
        {
            reply_markup: {
                keyboard: [[{ text: 'web app', web_app: { url: web_line } }]],
                one_time_keyboard: true,
                resize_keyboard: true
            }
        }
    ))

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))