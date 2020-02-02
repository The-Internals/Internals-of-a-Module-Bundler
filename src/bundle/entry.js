import foo from './foo';

import { clone } from 'lodash';

import style from './style.css';

console.log(foo(), clone, style);

import('./bar').then(bar => {
  console.log(bar.default());
});
