// you can write js here
console.log('exo-2');

const isTesting = true;
const myDate = new Date();

let toDay;

if(isTesting){
   toDay = prompt('Donne un jour stp')
} else {
    toDay = myDate.getDay();
}

console.log(myDate);

const weekDay = 'Jour de semaine';
const weekendDay = 'Jour de weekend';

const hourDay = myDate.getHours();

function test(day,hour){
    if(day === 6 | day === 0){
        console.log(weekendDay);
    } else if(day === 5 && hour >= 17){
        console.log(weekendDay);
    } else if(day === 1 && hour <= 9){
        console.log(weekendDay);
    } else {
        console.log(weekDay);
    }
}

test(toDay, hourDay);




