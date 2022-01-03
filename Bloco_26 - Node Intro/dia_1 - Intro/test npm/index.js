const readline = require('readline-sync');

const name = readline.question("Te chamam como?")
const idade = readline.questionInt("Quantos anos tu já viu se acabando?")

console.log(`Olá ${name}, voce tem ${idade} anos`);