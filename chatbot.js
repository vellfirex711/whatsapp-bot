// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|anúncio|Facebook|cadastro|Cadastro|Informações|informações|Ola|Olá|ola|olá)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(500); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Sou o assistente virtual da empresa *Seiwa Support*. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n*1* - Quero me cadastrar.\n*2* - Quais são outras ofertas.\n*3* - Sou funcionário da Seiwa e quero avisar de falta\n*4* - Sou funcionario da Seiwa e Quero pedir yuukyu\n*5* - Outras perguntas\n\n\n\n\n\n powered by k.mori'); //Primeira mensagem de texto
        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000); //Delay de 5 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Obrigado por entrar em contato!.\n\nPara prosseguirmos com o processo de recrutamento, por favor, registre-se no nosso sistema através do link abaixo.');

        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'COMO FUNCIONA?\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro .\n\n2º Passo\nCertifique-se que o cadastro foi finalizado .');

        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Link para cadastro: : https://seiwasupport.jp/curriculo/tantousha/28');


    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Por favor me informe os seguintes dados\n\n*①-Qual fábrica voce trabalha?* .\n\n*②-Nome do funcionário*.\n\n*③-Motivo da falta*.');


        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Para voltar ao menu principal digite a palavra *Menu*');
    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Por favor me informe os seguintes dados\n\n*①-Qual fábrica voce trabalha?* .\n\n*②-Nome do funcionário*.\n\n*③-Motivo da falta*.\n\n*④-Data do yuukyu*');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Para voltar ao menu principal digite a palavra *Menu*');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Você pode conferir outrsa ofertas atraves dos links abaixo.\n\n*CANAL WHATSAPP*,Link:https://whatsapp.com/channel/0029Vb3hiNFHFxP5WDHa312p\n\n*PÁGINA DO FACEBOOK*,Link:https://www.facebook.com/share/1Mx77nUvGB/?mibextid=wwXIfr\n\n*PÁGINA DO INSTAGRAM*,Link:https://www.instagram.com/seiwasupport/wwXIfr\n\n*SITE OFICIAL*,Link:https://www.seiwasupport.jp/');


        await delay(1000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Para voltar ao menu principal digite a palavra *Menu*');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ,Assim que possivel o representante Kenji ira responder');


    }








});