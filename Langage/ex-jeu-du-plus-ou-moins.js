function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

const jouer = function() {
  if (essais.length) {
    console.log('Précédents essais : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre entier ? ', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur, il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop Petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop Grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
};

jouer();
