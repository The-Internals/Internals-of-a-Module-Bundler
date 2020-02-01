```html
<script type="module" src="module.mjs|.js"></script>
```

module.js

```js
// From: https://jakearchibald.com/2017/es-modules-in-browsers/

import { foo } from 'https://jakearchibald.com/utils/bar.mjs';
import { foo } from '/utils/bar.mjs';
import { foo } from './bar.mjs';
import { foo } from '../bar.mjs';
```

Issue

- Paths for other modules third party module has to be absolute.
- Tree-shake
- Cross browser support. (Can be polyfill)

```js
import _ from 'https://unpkg.com/lodash-es';
```
