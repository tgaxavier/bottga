const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 Informações 〉*
   ╽
   ┠≽ *Nome* : ${pushname}
   ┠≽ *XP* : ${reqXp}
   ┠≽ *Dinheiro* : ${uangku}
   ┠≽ *Registrado* : ✔️
   ╿
┯┷ *〈 BOT INFO 〉*
╽
┠≽ *Prefix* : 「  ${prefix}  」
┠≽ *Criador* : ${ownerName}
┠≽ *Version* : 0.0.4
┠──────────────╼
┷┯ *〈 MENU 〉*
   ┠≽ *${prefix}sticker*
   ┠≽ *${prefix}linkgc*
   ┠≽ *${prefix}linkme*
   ┠≽ *${prefix}ban*
   ┠≽ *${prefix}add*
   ┠≽ *${prefix}welcome*
   ┠≽ *${prefix}promover*
   ┠≽ *${prefix}demote*
   ┠──────────────╼
   ┠≽ *${prefix}appmod
   ┠≽ *${prefix}dono*
   ┠≽ *${prefix}block*
   ┠≽ *${prefix}unblock*
   ┠≽ *${prefix}blocklist*
   ┠≽ *${prefix}tts*
   ┠≽ *${prefix}adminlist*
   ┠──────────────╼
   ┠≽ *${prefix}marcar*
   ┠≽ *${prefix}leave*
   ┠≽ *${prefix}report*
   ┠≽ *${prefix}bebado*
   ┠≽ *${prefix}opengc*
   ┠≽ *${prefix}closegc*
   ┠≽ *${prefix}play1*
   ┠≽ *${prefix}play2*
   ┠≽ *${prefix}ytmp4*
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.help = help