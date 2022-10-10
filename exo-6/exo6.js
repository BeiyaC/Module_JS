// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo['cars'].length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo['bathrooms'] = 1;
console.log(joeInfo['bathrooms']);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.

joeInfo['garage'] = true;
console.log(joeInfo['garage']);

//

const team = {
    players : [
        {
            firstName:'Pablo',
            lastName: 'Sanchez',
            age: 11
        }],
    games: [
        {
            opponent:'Broncos',
            teamPoints: 42,
            opponentPoints: 27,
    }],
};

team.addPlayer = function (firstName, lastName, age) {
    this.players.push({firstName,lastName,age});
};
team.addGames = function (opponent, teamPoints, opponentPoints) {
    this.games.push({opponent, teamPoints, opponentPoints})
};
team.teamScore = function (){
    let score = 0;
    for (let game of this.games) {
        score += game.teamPoints
    }
    return score
};
team.opponentScoreAverage = function (){
    let score = 0;
    for (let game of this.games) {
        score += game.opponentPoints
    }
    return score / this.games.length
};
team.oldestPlayer = function (){
    let oldestPlayer = this.players[0];
    for (let player of this.players){
        if(player.age > oldestPlayer.age){
            oldestPlayer = player;
        }
    }
    return oldestPlayer;

}

team.addPlayer('Franck', 'Ribéry', 38);
team.addPlayer('Florent', 'Malouda', 43);
team.addPlayer('Moussa', 'Sissoko', 35);

team.addGames('Polchka',45,32);
team.addGames('Alsset',36,56);
team.addGames('Issa',55,45);

console.log(team.teamScore());
console.log(team.opponentScoreAverage());
console.log(team.oldestPlayer());
console.log(team);

