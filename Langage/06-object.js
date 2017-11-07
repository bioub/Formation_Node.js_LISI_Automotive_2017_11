// 1 - Extensibilité
console.log(Math.sum); // undefined

Math.sum = (a, b) => a + b;
console.log(Math.sum); // function
console.log(Math.sum(1, 2)); // 3

Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum); // function
console.log(Math.sum('1', '2')); // 3

delete Math.sum;

// Mauvaise pratique d'étendre les objets du language
// ou de l'environnement

// Pour créer un nouvel objet
// - soit 1 fois avec object literal
// - soit plusieurs fois avec constructor function

// Object literal
global.MyMath = {
  sum: function(a, b) {
    return Number(a) + Number(b)
  }
};

console.log(MyMath.sum(1, 2)); // 3

const coords2d = {
  x: 10,
  y: 20,
  sub: {
    x: 10,
    y: 20,
  },
};

if (false) {
  coords2d.z = 50;
}

console.log(coords2d.x); // 10
console.log(coords2d['x']); // 10
const prop = 'y';
console.log(coords2d[prop]);

// constructor function

const Contact = function(prenom) {
  if (prenom) {
    this.prenom = prenom;
  }
  /*
  this.hello = function() {};
  */
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

const anonymous = new Contact();
console.log(typeof anonymous); // object
console.log(anonymous.prenom); // undefined

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je suis Romain
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false

console.log(anonymous.hello === romain.hello); // false

for (var key in romain) {
  if (romain.hasOwnProperty(key)) {
      console.log("C'est bien la propriété (" +
      key +
                   "), sa valeur : " + romain[key]
                  );
  }
  else {
      console.log(key);
      // toString ou autre
  }
}



// ES6, sucre syntaxique (syntaxe simplifiée)

/*
function Voiture(marque) {
  this.marque = marque;
}

Voiture.prototype.demarrer = function() {
  console.log('Vrrroommm vrrrooomm');
};
*/
class Voiture { // ES6
  constructor(marque) {
    this.marque = marque
  }
  demarrer() {
    console.log('Vrrroommm vrrrooomm');
  }
  get infos() { // ES5
    return this.marque.toUpperCase();
  }
}

console.log(typeof Voiture); // function
const p3008 = new Voiture('Peugeot');
console.log(p3008.infos); // Peugeot
