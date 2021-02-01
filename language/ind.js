exports.noregis = () => {
        return `*「 Registre-se 」*\n\n*Como registrar ${prefix}register nome|idade* \n*Exemplo: ${prefix}register Gui|27*`
}

exports.rediregis = () => {
        return `*「 Ja registrado」*\n\n*Você já está registrado no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*format salah/text kosong*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRASI 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「  CADASTRADO 」*\n\nCadrasto efetuado com sucesso \n\n┠≽*DATA* \n  │ \n  ╰╼≽ ❏ Nome : ${namaUser} \n  ╰╼≽ ❏ Numero : wa.me/${sender.split("@")[0]} \n  ╰╼≽ ❏ idade : ${umurUser} \n  ╰╼≽ ❏ Registrado dia : ${time} \n  │ \n ╰╼≽ ❏ NS : ${serialUser} \n\n ❏ NOTA : \n NÃO ESQUEÇA ESTE NÚMERO PORQUE ISTO É IMPORTANTE`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* Nao encontrado\Tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.limitend = (pushname) => {
        return`*Desculpa ${pushname} Seu Limite Acabou*\n*o limite é zerado a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMITE CONTA 」*
o resto do seu limite : ${limitCounts}

NOTE : para chegar ao limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicione o parâmetro 1/habilitar ou 0/desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`┠≽*ATM*\n┠≽*Nome* : ${pushname}\n┠≽ *Numero* : ${sender.split("@")[0]}\n  ┠≽*Gold* : ${uangkau}`
}