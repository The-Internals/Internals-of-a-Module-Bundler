1. Start from entry
2. Take file to process
3. Apply loaders (if not excluded)
4. Find dependencies
5. Recursively perform 2-4 on dependencies and create a dependency graph.
6. Analyze dependency graph and webpack configuration to figure out chunks.
7. Concatenate files based on chunk information.
8. Tree shake while concatenating.
9. Keep the information about dependency graph, module mapping on runtime.js
