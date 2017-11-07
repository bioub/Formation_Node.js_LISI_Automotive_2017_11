import readline from 'readline';
import { getRandomIntInclusive } from './random';

class Jeu {
  constructor(options = {}) {
    const {min = 0, max = 100} = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this._entierAlea = getRandomIntInclusive(min, max);
    this._essais = [];
  }
  jouer() {
    if (this._essais.length) {
      console.log('Précédents essais : ' + this._essais.join(' - '));
    }

    this._rl.question('Quel est le nombre entier ? ', (answer) => {
      const entierSaisi = parseInt(answer);

      if (isNaN(entierSaisi)) {
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

export default Jeu;