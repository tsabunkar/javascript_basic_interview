# CLOSURE

- A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
- The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.
- The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.
- Closure use-case: Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions, and in partial applications, currying
- What is a Closure?
  - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
  - In other words, a closure gives you access to an outer function’s scope from an inner function.
  - To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
  - The inner function will have access to the variables in the outer function scope, even after the outer function has returned
- How is clouse used for Data-privacy ? (Use case of closure)
  - closures are commonly used to give objects data privacy.
  - Data privacy is an essential property that helps **program to an interface, not an implementation.**
  - When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods.
