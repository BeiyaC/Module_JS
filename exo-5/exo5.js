// you can write js here

console.log('exo-5');

let input = prompt('Write what you want');

const vowels = ['a','e','i','o','u','y'];

let resultArray = [];

input = input.toLowerCase();
input = Array.from(input);

function whaleSpeak(input, vowels){

    for(let i = 0; i < input.length; i++){

        /*for(let j = 0; j < vowels.length; j++)
        {
            if(input[i] === vowels[j])
            {
                resultArray.push(input[i]);
                break;
            }
        }*/

        if(vowels.indexOf(input[i]) >= 0){
            resultArray.push(input[i]);
        }

    }

    return resultArray;
}


console.log(whaleSpeak(input, vowels).join('').toUpperCase());