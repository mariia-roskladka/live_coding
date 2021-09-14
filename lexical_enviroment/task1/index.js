/* eslint-disable */


/*
//global
{
    'enviromentRecord':{
        'message':'Test',
        'weight':55,
        'createMessenger':func,
        .....
    },
    'otherLexicalEnviroment':null
}

//createMessenger
{
    'enviromentRecord':{
        'message':'Just learn it',
        'sender':'Gromcode',
        'sendMessenger':func,
        .....
    },
    'otherLexicalEnviroment':global
}

//run
'enviromentRecord':{ },
'otherLexicalEnviroment':global

//sendMessage
'enviromentRecord':{ },
'otherLexicalEnviroment':createMessenger


*/
const message = 'Test';
const weight = 55;


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// if (true) {
//     const currentDay = 'Monday';
//     console.log(message);
// }
// console.log(currentDay);

function run() {
    console.log('RUN');
}

function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setSender(newSender) {
        sender = newSender;
    }

    function setMessage(text) {
        message = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    };
}


// const messanger = createMessenger();
// message.sendMessage('TestName');
run();

const messanger1 = createMessenger();
messanger1.setSender('Nova Poshta');
messanger1.sendMessage('Mariia');

const messanger2 = createMessenger();
messanger1.setSender('Rozetka');
messanger1.sendMessage('Mariia');

const messanger3 = createMessenger();