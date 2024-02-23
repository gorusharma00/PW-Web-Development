### Promises and Callbacks

- Callbacks and Promises are both techniques for managing asynchronous operations in JavaScript, but they have some key differences:
   
   * <b>Readability:</b> Callbacks can lead to callback hell, making code hard to read and understand. Promises, on the other hand, allow you to chain operations and making code more readable and easier to understand.

   * <b>Inversion of Control:</b> Callback also lead to big issue called inversion of control means giving control of your code execution to others. Promises solves this issue.

   * <b>Error Handling:</b>  In callbacks, you need to handle errors at every level of the callback. In Promises, you can handle all errors in a single catch block, making error handling more centralized and manageable.