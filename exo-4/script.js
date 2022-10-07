// you can write js here

console.log('exo-4');

let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();
secretMessage.push('to','program');

let pos = secretMessage.indexOf('easily');
secretMessage[pos] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');

function deleteChar(nameChar, numberOfChar){

    const newPos = secretMessage.indexOf(nameChar);

    secretMessage.splice(newPos, numberOfChar);
    secretMessage[newPos] = 'know';

    return secretMessage;

}

deleteChar('get', 4);

console.log(secretMessage.join());