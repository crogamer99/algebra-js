// ovde je pomocni kod

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function getPI(){
    return Math.PI;
}

// export {getRandomNumber}; 
module.exports = {
    getRandomNumber: getRandomNumber,
    getPI: getPI
};