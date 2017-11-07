var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2500, 'un');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'deux');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'trois');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'quatre');
});

Promise.all([p1, p2, p3, p4]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});
