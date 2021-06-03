/*
    CIT 281 Project 1
    Name: Jia Huang
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomString(length = getRandomInteger(5, 25)) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

getRandomString(getRandomInteger(5, 25))