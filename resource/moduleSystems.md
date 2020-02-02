## Global

```js
const React = window.React;
```

## Commonjs

```js
const React = require('react');
```

## ESM

```js
import React, { useState } from 'react';
```

### Dynamic import

```js
import('lodash').then(React => {
  //React
});
```

## AMD

```js
requirejs(['react'], React => {});
```

## SystemJS import

```js
System.import('./app.js'); //jspm
```

<!-- require.ensure([], () => {
  const React = require('react');
}) -->
