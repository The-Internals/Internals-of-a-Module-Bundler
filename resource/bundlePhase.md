1. Start from entry
2. Take file to process
3. Apply loaders (if not excluded)
4. Find dependencies
5. Recursively perform 2-4 on dependencies and create a dependency graph.
6. Analyze dependency graph and webpack configuration to figure out chunks.
7. Concatenate files based on chunk information.
8. Tree shake while concatenating.
9. Keep the information about dependency graph, module mapping on runtime.js

## Different Phases

- Traverse
- Transform
- Create Dependency graph
- Create bundles
- Post Plugins

## Dependency graphs

- entry.js [0]

  - foo.js
  - lodash.js (clone)
  - style.css
  - bar.js (async)

- foo.js [1]

  - math.js (sum, mul)

- lodash.js [2]

- style.css [3]

- bar.js [4]

  - math.js (mul, divide)

- math.js [5]

## Final graph

- bundle.js [0, 1, 2, 3, 5]
  - foo.js
  - lodash.js (clone)
  - style.css
- bar.js [4, 5]
- common.js
  - math.js (sum, mul)
