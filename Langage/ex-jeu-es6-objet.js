// En repartant du corrigé sur github

// 1 - Créer un objet Random (avec object literal)
// contenant les 4 fonctions aléatoires
// const rand = Random.getIntInclusive(0, 100);
const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
};


const readline = require('readline');

// 2 - Traduire le jeu en Objet (class ou constructor function)

class Jeu {
  constructor(options = {}) {
    const {min = 0, max = 100} = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];
  }
  jouer() {
    if (this._essais.length) {
      console.log('Précédents essais : ' + this._essais.join(' - '));
    }

    this._rl.question('Quel est le nombre entier ? ', (answer) => {
      const entierSaisi = parseInt(answer);

      if (isNaN(entierSaisi)) {
        console.log('Erreur, il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop Petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop Grand');
        return this.jouer();
      }

      console.log('Gagné');
      this._rl.close();
    });
  }
}

const jeu = new Jeu({
  max: 10,
});
jeu.jouer();

// 3 - Permettre de paramétrer la class avec un objet
// const jeu = new Jeu({
//   min: 20,
//   max: 30,
// });
// jeu.jouer();

// 4 - Min par défaut 0, et max = 100


