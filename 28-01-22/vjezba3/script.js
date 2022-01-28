"use strict";
// 1.
var x = {
    a : 79
};
var b = 34;
delete x.a;
function window(){var b;}
delete window.b;
var myObject = {property1:1, property2:2, property3:1};


// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const newUsers = {...users,user};

console.log(newUsers);


// 3.
for (let i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

console.log(i); // let "i is not defined", ako maknemo vanjski console.log vraca 0-9; var "10 /n The number is 10"x10