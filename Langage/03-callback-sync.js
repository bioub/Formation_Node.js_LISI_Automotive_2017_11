const nbs = [2, 3, 4];

nbs.filter(nb => nb > 2)
  .forEach((nb, i) => {
    console.log(nb, i);
  });

Array.prototype.myForEach = function(cb) {
  for (var i=0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

nbs.myForEach(function(nb, i) {
  console.log(nb, i);
});

const setTimeoutSync = function(cb, delay) {
  const debut = Date.now();

  while (debut + delay > Date.now()) {}

  cb();
};

setTimeoutSync(function() {
  console.log('Hello');
}, 1000);

setTimeoutSync(function() {
  console.log('Bye');
}, 1000);

console.log('fin');
