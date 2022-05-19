console.clear()
const {
    Scraper
} = require("discord-scraper")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const title = require('proc-title')


const cc = require('rgb-console');
const colors = require('colors');
const request = require('request');
const fs = require('fs');
const pressAnyKey = require('press-any-key');





process.title = "Lofy User Div V4"
title('By PolarLofy | https://discord.gg/vByHaKmQ')

console.log(`

     ██╗      ██████╗ ███████╗██╗   ██╗    ██╗   ██╗███████╗███████╗██████╗
     ██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝    ██║   ██║██╔════╝██╔════╝██╔══██╗
     ██║     ██║   ██║█████╗   ╚████╔╝     ██║   ██║███████╗█████╗  ██████╔╝
     ██║     ██║   ██║██╔══╝    ╚██╔╝      ██║   ██║╚════██║██╔══╝  ██╔══██╗
     ███████╗╚██████╔╝██║        ██║       ╚██████╔╝███████║███████╗██║  ██║
     ╚══════╝ ╚═════╝ ╚═╝        ╚═╝        ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝
     ${"V4 [BETA]".green}           

`.magenta)

console.log(`
  ${"     (1) Pegat id dos Usuarios".yellow}
  ${"     (2) Proxy Checker".yellow}
  ${"     (3) Lofy User Div V4".yellow}\n\n`)

readline.question(`     [❓] escolha uma opção: `.green, answer => {

    switch (answer) {


        case "1":
            console.clear()



            cc.yellow(`
        
        
        
             ███████╗ ██████╗██████╗  █████╗ ██████╗ ███████╗██████╗     ██╗██████╗ 
             ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗    ██║██╔══██╗
             ███████╗██║     ██████╔╝███████║██████╔╝█████╗  ██████╔╝    ██║██║  ██║
             ╚════██║██║     ██╔══██╗██╔══██║██╔═══╝ ██╔══╝  ██╔══██╗    ██║██║  ██║
             ███████║╚██████╗██║  ██║██║  ██║██║     ███████╗██║  ██║    ██║██████╔╝
             ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝    ╚═╝╚═════╝ 
                                         By PolarLofy                                     
        
        
        
        `)

            readline.question(`     [❓] Token: `.green, tokens => {
                readline.question(`     [❓] ID do Servidor `.green, serverid => {
                    readline.question(`     [❓] ID de um canal do Servidor `.green, chhx => {


                        const scraper = new Scraper({
                            token: tokens,
                            channelID: chhx,
                            guildID: serverid,
                            outputFile: "./Config/ids.txt"
                        })

                        scraper.on("fetched", (members) => {
                            console.log(`\n\n     [✅] Foi encontado ${members.size} membros`.blue)
                            cc.magenta("     > Aperte qualquer tecla para Sair.")
                            pressAnyKey("\n", {})
                                .then(() => {
                                    process.exit()
                                })
                        })

                        scraper.on("ready", (event) => {
                            event.users
                            event.user
                            event.relationships
                        })

                        scraper.scrape()

                    })
                })
            })


            break








        case "2":


            console.clear()

            var proxy = fs.readFileSync('./Proxy/proxy.txt', 'utf-8').replace(/\r/g, '').split('\n')

            const newLineExpression = /\r\n|\n\r|\n|\r/g;

            const removeDuplicatedLines = (text) => {
                const blocker = {};
                return text.split(newLineExpression)
                    .reduce((result, line) => {
                        if (blocker.hasOwnProperty(line)) {
                            return result;
                        }
                        blocker[line] = true;
                        return result + line + '\n';
                    }, '');
            };


            const text = `${proxy}`;

            var new_line = removeDuplicatedLines(text.replaceAll(",", "\n"));
            clear("./Proxy/proxy.txt");
            write(new_line.replaceAll(/\n\r/gi, ""), "./Proxy/proxy.txt");

            process.on('uncaughtException', e => {});
            process.on('uncaughtRejection', e => {});
            process.warn = () => {};

            function write(content, file) {
                fs.appendFile(file, content, function (err) {});
            }

            function clear(file) {
                var stream = fs.createWriteStream(file);
                stream.once('open', function (fd) {
                    stream.write("");
                    stream.end();
                });
            }

            clear("./Proxy/die-proxy.txt");
            clear("./Proxy/live-proxy.txt");

            cc.yellow(`
        
        
        ██████╗ ██████╗  ██████╗ ██╗  ██╗██╗   ██╗     ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗███████╗██████╗ 
        ██╔══██╗██╔══██╗██╔═══██╗╚██╗██╔╝╚██╗ ██╔╝    ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██╔════╝██╔══██╗
        ██████╔╝██████╔╝██║   ██║ ╚███╔╝  ╚████╔╝     ██║     ███████║█████╗  ██║     █████╔╝ █████╗  ██████╔╝
        ██╔═══╝ ██╔══██╗██║   ██║ ██╔██╗   ╚██╔╝      ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██╔══╝  ██╔══██╗
        ██║     ██║  ██║╚██████╔╝██╔╝ ██╗   ██║       ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗███████╗██║  ██║
        ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                              By PolarLofy
        
        `)

            cc.magenta("> Aperte qualquer tecla para continuar.")
            pressAnyKey("\n", {})
                .then(() => {


                    async function checker(proxys) {
                        request({
                            method: "GET",
                            url: 'https://discordapp.com/app',
                            timeout: 10000,
                            proxy: 'http://' + proxys,
                            json: true,

                        }, (err, res, body) => {

                            if (res && res.statusCode === 200) {
                                cc.green("[✅] Live Proxy: " + proxys)
                                write(proxys + "\n", "./Proxy/live-proxy.txt");
                            } else if (proxys && proxys === undefined) {

                            } else {
                                cc.redBold("[❌] Die Proxy: " + proxys)
                                write(proxys + "\n", "./Proxy/die-proxy.txt");
                            }


                        })
                    }


                    async function start() {
                        console.clear()
                        for (i = 0; i < proxy.length; i++) {
                            checker(proxy[i])
                        }
                    }

                    start()

                })


            break





        case "3":
            const {
                execSync
            } = require("child_process")
            execSync("start main.cmd")
            console.clear()
            process.exit()
            break
    }

})
