import foo from './foo';

import { clone } from 'lodash';

import style from './scss';

console.log(foo(), clone, style);

import('./bar').then(bar => {
  console.log(bar());
});
