const externe = function(msg) {
  // portée de closure (sauvegardée)
  // msg = null;
  const interne = function() {
    console.log(msg);
  };

  return interne;
};

const hello = externe('Hello');
hello();

for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}
// Dans 0 sec 3 3 3


for (var i=0; i<3; i++) {
  setTimeout(externe(i), 0);
}
// Dans 0 sec 0 1 2


/*
function createButton(value) {
  var btn = document.createElement('button');
  btn.innerText = value;

  btn.addEventListener('click', function() {

  });
}
*/
