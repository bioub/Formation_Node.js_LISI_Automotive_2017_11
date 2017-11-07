// ES5
var sum = function(a, b) {
  return a + b;
};

// ES6 : Arrow function
var sum = (a, b) => a + b;

// var -> let ou const (portée de block)

// ES6 : Default Value
var sum = (a, b, c = 0) => a + b + c;

const MyMath = {
  sum: function(a, b) {
    return a + b;
  },
  sum(a, b) { // ES6
    return a + b;
  }
};

// Template string/literal
const prenom = 'Romain';
console.log(`Bonjour ${prenom}`);

// ... REST Params
const sum = (...nbs) => nbs.reduce(a, n => a + n);
console.log(sum(1, 2, 3, 4, 5));

// ... SPREAD Operator
const nbs = [2, 3, 4];
console.log(sum(nbs[0], nbs[1], nbs[2]));
console.log(sum(...nbs)); // SPREAD

const autres = [1, ...nbs, 5, 6]; // 1, 2, 3, 4, 5, 6
const clone = [...nbs]; // clone le premier niveau

// ESNext (pas encore dans ES8) REST/SPREAD Object
const coords2d = {
  x: 10,
  y: 20,
};

const coords3d = {
  ...coords2d,
  z: 30,
};

const cloneObj = {...coords3d}; // clone le premier niveau

// Clone récursif (Open Source Lodash cloneDeep)

// Destructurer
// const cinq = nbs[4];
const [un, deux, trois, , , , , , neuf = 9] = autres;
const {x: maVarX, y: y, z = 10} = coords2d;

const autresCoords = {
  x: maVarX, y, z // x: x, y: y, z: z // shorthand prop
};

// for ... of pour boucle sur un iterable (tableau, string, arguments, map...)
for (let nb of nbs) {
  console.log(nb);
}
