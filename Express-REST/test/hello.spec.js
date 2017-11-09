const assert = require('assert');

function hello(prenom) {
  return 'Bonjour ' + prenom;
}

describe('Hello', () => {
  it('should returns Bonjour Romain', () => {
    assert.deepEqual(hello('Romain'), 'Bonjour Romain');
  });
});