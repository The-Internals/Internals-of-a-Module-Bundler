## Commonjs

```js
const React = require('react');
```

## ESM

```js
import React from 'react';
```

### Dynamic import

```js
import('react').then(React => {
  //React.default
});
```

## AMD

```js
requirejs(['react'], React => {});
```

## Global

```js
const React = window.React;
```

## SystemJS import

```js
System.import('react');
```
