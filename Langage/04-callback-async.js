
setTimeout(function() {
  console.log('Hello');
}, 1000);

setTimeout(function() {
  console.log('Bye');
}, 1000);

const nbs = [2, 3, 4];

Array.prototype.myForEachAsync = function(cb) {
  for (var i=0; i < this.length; i++) {
    process.nextTick(cb, this[i], i, this);
  }
};

nbs.myForEachAsync(function(nb, i) {
  console.log(nb, i);
});

console.log('fin');
