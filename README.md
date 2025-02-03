# Unhandled Promise Rejection in Async Express Route

This repository demonstrates a common error in Node.js applications using Express.js: unhandled errors within asynchronous route handlers. The `bug.js` file contains code that simulates an asynchronous operation that might fail. If the simulated operation fails, an error is thrown, but it's not caught, leading to a server crash.

The `bugSolution.js` file shows how to properly handle this type of error using `try...catch` blocks or promises.