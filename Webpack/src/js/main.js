import { Horloge } from './horloge';
import { getRandomIntInclusive } from './random';

const divElt = document.querySelector('.horloge');

const clock = new Horloge({
  container: divElt,
});

clock.start();

getRandomIntInclusive(0, 100);