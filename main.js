const request = require('request');
const colors = require('colors');
var sleep = require('sleep');
var fs = require('fs');

process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

const proxy = fs.readFileSync('./Config/proxies.txt', 'utf-8').replace(/\r/g, '').split('\n')
const discordids = fs.readFileSync('./Config/ids.txt', 'utf-8').replace(/\r/gi, '').split('\n');
const discordtoken = fs.readFileSync('./Config/tokens.txt', 'utf-8').replace(/\r/gi, '').split('\n');
const mensagem = fs.readFileSync('./Config/mensagem.txt', 'utf-8')


function remover_id(i) {
    const e = require("fs"),
        n = "./Config/ids.txt";
    e.readFile(n, "utf8", ((i, t) => {
        e.writeFile(n, ((i, e = []) => i.split("\n").filter(((i, n) => -1 === e.indexOf(n))).join("\n"))(t, [0, 4, 5]), "utf8", (function (i) {}))
    }))
}


function remover_token(i) {
    const e = require("fs"),
        n = "./Config/tokens.txt";
    e.readFile(n, "utf8", ((i, t) => {
        e.writeFile(n, ((i, e = []) => i.split("\n").filter(((i, n) => -1 === e.indexOf(n))).join("\n"))(t, [0, 4, 5]), "utf8", (function (i) {}))
    }))
}


function remover_proxy(i) {
    const e = require("fs"),
        n = "./Config/proxies.txt";
    e.readFile(n, "utf8", ((i, t) => {
        e.writeFile(n, ((i, e = []) => i.split("\n").filter(((i, n) => -1 === e.indexOf(n))).join("\n"))(t, [0, 4, 5]), "utf8", (function (i) {}))
    }))
}


let date_ob = new Date();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
var sus = "(".blue + `${hours}`.yellow + ":".blue + `${minutes}`.yellow + ":".blue + `${seconds}`.yellow + ")".blue


request({
    method: "GET",
    url: 'https://discord.com/app',
    proxy: 'http://' + proxy[0],
    timeout: 10000,
    json: true
}, (a, b, c) => {


    var dcfduid = b.headers["set-cookie"][0].split("__dcfduid=")[1].split(";")[0]
    var sdcfduid = b.headers["set-cookie"][1].split("__sdcfduid=")[1].split(";")[0]


    if (b && b.statusCode === 200) {



        request({
            method: "GET",
            url: 'https://discord.com/api/v9/users/' + discordids[0],
            json: true,
            headers: {
                "Authorization": discordtoken[0],
                "accept": "*/*",
                "accept-language": "en-US",
                "connection": "keep-alive",
                "cookie": `__dcfduid=${dcfduid}; __sdcfduid=${sdcfduid}; locale=en-US`,
                "DNT": "1",
                "origin": "https://discord.com",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "referer": "https://discord.com/channels/@me",
                "TE": "Trailers",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9001 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
                "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAxIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODMwNDAsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
            }


        }, (err, rtjr, wet) => {
           //console.log(wet)

    
            if (rtjr && rtjr.statusCode === 200) {
                console.log(sus + " [".blue + "V".green + "]".blue + ` Configurando parametros para: `.green + wet.username.cyan)
                console.log(sus + " [".blue + "V".green + "]".blue + " Abrindo dm de ".red + wet.username.yellow)


                request({
                    method: "POST",
                    url: 'https://discord.com/api/v9/users/@me/channels',
                    body: {
                        "recipients": [`${discordids[0]}`]
                    },
                    json: true,
                    headers: {
                        "Authorization": discordtoken[0],
                        "accept": "*/*",
                        "accept-language": "en-US",
                        "connection": "keep-alive",
                        "cookie": `__dcfduid=${dcfduid}; __sdcfduid=${sdcfduid}; locale=en-US`,
                        "DNT": "1",
                        "origin": "https://discord.com",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "referer": "https://discord.com/channels/@me",
                        "TE": "Trailers",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9001 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
                        "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAxIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODMwNDAsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
                    }

                }, (err, asdfg, inicio) => {
                  //console.log(inicio)

                    if (asdfg && asdfg.statusCode === 200) {



                        request({
                            method: "POST",
                            url: `https://discord.com/api/v9/channels/${inicio.id}/messages`,
                            body: {
                                "content": mensagem,
                                "nonce": "",
                                "tts": false
                            },
                            json: true,
                            headers: {
                                "Authorization": discordtoken[0],
                                "accept": "*/*",
                                "accept-language": "en-US",
                                "connection": "keep-alive",
                                "cookie": `__dcfduid=${dcfduid}; __sdcfduid=${sdcfduid}; locale=en-US`,
                                "DNT": "1",
                                "origin": "https://discord.com",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "referer": "https://discord.com/channels/@me",
                                "TE": "Trailers",
                                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9001 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
                                "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAxIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODMwNDAsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
                            }


                        }, (err, res, porno) => {
                            //console.log(porno)

                            if (porno && porno.message === "Cannot send messages to this user") {
                                console.log(sus + " [".blue + "X".red + "]".blue + " Usuario não pode receber mensagem".red)
                                remover_id()

                            } else if (porno && porno.message === "You are opening direct messages too fast.") {
                                console.log(sus + " [".blue + "D".green + "]".red + ` Dando uma pausa Zzz: `.green + proxy[0])
                                remover_proxy()
                                sleep.sleep(700)

                            } else if (porno && porno.captcha_service === "hcaptcha") {
                                console.log(sus + " [".blue + "D".green + "]".red + ` Requer verificação (Hcaptcha): `.green + proxy[0])
                                remover_proxy()

                            } else if (porno && porno.message === "Channel verification level is too high") {
                                console.log(sus + " [".blue + "@".green + "]".red + ` Token Requer verificação de Telefone: `.green + wet.username.cyan + ` ${discordtoken[0].red}`)
                                remover_token()

                            } else if (res && res.statusCode === 200) {
                                console.log(sus + " [".blue + "@".green + "]".blue + ` Mensagem Enviada para: `.green + wet.username.cyan)
                                remover_id()

                            } else if (res && res.statusCode === 401) {
                                console.log(sus + " [".blue + "#".yellow + "]".blue + " Token Invalido".red)
                                remover_token()

                            } else if (res && res.statusCode === 429) {

                                var exemplo = `${porno.retry_after}`;
                                var resultados = exemplo.replace(".", "");
                                console.log(sus + " [".blue + "Rate Limited".yellow + "]".blue + " Você tem que esperar " + resultados + " Segundos")
                                sleep.msleep(resultados)
                            } else {
                                console.log(sus + " [".red + "!".yellow + "]".red + ` Proxy Invalida: ${proxy[0]} `.red)
                                remover_proxy()
                            }

                        })


                    } else if (asdfg && asdfg.statusCode === 400) {
                        remover_id()

                    } else if (inicio && inicio.captcha_service === "hcaptcha") {
                        console.log(sus + " [".blue + "D".green + "]".red + ` Requer verificação (Hcaptcha): `.green + proxy[0])
                        remover_proxy()

                    } else if (asdfg && asdfg.statusCode === 429) {

                        var exemplo = `${inicio.retry_after}`;
                        var resultado = exemplo.replace(".", "");
                        console.log(sus + " [".blue + "Rate Limited".yellow + "]".blue + " Você tem que esperar " + resultado + " Segundos")
                        sleep.msleep(resultado)

                    } else if (asdfg && asdfg.statusCode === 401) {
                        console.log(sus + " [".blue + "#".yellow + "]".blue + " Token Invalido".red)
                        remover_token()
                    } else {
                        console.log(sus + " [".red + "!".yellow + "]".red + ` Proxy Invalida: ${proxy[0]} `.red)
                        remover_proxy()
                    }


                })

            } else if (rtjr && rtjr.statusCode === 404) {
                console.log(sus + " [".blue + "!".green + "]".blue + ` Lista de Ids Vazia: `.red)


            } else if (wet && wet.message === "401: Unauthorized") {
                console.log(sus + " [".blue + "#".yellow + "]".blue + " Token Invalido".red)
                remover_token()

            
            } else {
                console.log(sus + " [".red + "!".yellow + "]".red + ` Proxy Invalida: ${proxy[0]} `.red)
                remover_proxy()
            }

        })

    } else {
        console.log(sus + " [".red + "!".yellow + "]".red + ` Proxy Invalida: ${proxy[0]} `.red)
        remover_proxy()
    }

})